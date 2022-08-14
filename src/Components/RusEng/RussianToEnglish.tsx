import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setVocabulary } from "../../API/API"
import { falseVariants, randomWord } from "../../store/myFns"
import { AppDispatch, RootState, Word, vocabularThunk, Group, setRussianToEnglish } from "../../store/store"

export default function RussianToEnglish(props: Group){
    //Глобальные методы
    const dispatch: AppDispatch = useDispatch()

    //Глобальное состояние
    const { userId, pwd } = useSelector((state: RootState) => state.userData)
    const userVocabulary = useSelector((state: RootState) => state.userVocabulary)
    const wordsByGroup = useSelector((state: RootState) => state.dictionary.filter((el: Word) => el.groups.includes(props.eng)))
    const random = useSelector((state: RootState) => randomWord(wordsByGroup, state.userVocabulary.russianToEnglish))

    //Локальное состояние
    const [tryAgain, setTryAgain] = useState<boolean>(true) //Для перерисовки неправильного ответа
    
    //Эффекты
    useEffect(()=>{
        if(!userId){
            const localUserVocabulary = JSON.stringify(userVocabulary)
            localStorage.setItem('localUserVocabulary', localUserVocabulary)
        }
    },[userVocabulary])

    if(!random){//Рефакторинг
        return <h1>Congrats! Все слова изучены!</h1>
    }

    //Переменные для рендеринга
    const variants = falseVariants(wordsByGroup, random) //в таких случаях Объявляют заранее или можно внутри вёрстки
    const audio = new Audio(`/Audio/nouns/${random.eng}.mp3`) //В идеале парсить аудио с гугл/Яндекс-переводчика или получать с какойнибудь API

    //Методы для рендеринга
    function tryIt(e: any){
        if(e.target.value === random.eng){
            e.target.classList.add('bg-green-500')
            audio.play()
            setTimeout(()=>{
                setVocabulary(userId, pwd, 'russianToEnglish', random.id)
                .then(result => {
                    e.target.classList.remove('bg-green-500')
                    dispatch(vocabularThunk(userId))
                }, error => {console.log('errorrrr')})
            }, 1000)
        } else {
            e.target.classList.add('bg-red-500')
            setTimeout(()=>{
                e.target.classList.remove('bg-red-500')
                setTryAgain(!tryAgain)
            }, 1000)
        }
    }

    function tryItForUnknown(e: any){   
        if(e.target.value === random.eng){
            e.target.classList.add('bg-green-500') //Локальный
            audio.play()
            setTimeout(()=>{
                dispatch(setRussianToEnglish(random.id))
                    e.target.classList.remove('bg-green-500') //Через стейт
            }, 1000)
        } else {
            e.target.classList.add('bg-red-500')
            setTimeout(()=>{
                e.target.classList.remove('bg-red-500')
                setTryAgain(!tryAgain)
            }, 1000)
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <button className="w-64 m-auto" disabled={true}>{random.rus}</button>
            {variants.map(el => {
                return (
                    <button
                        className="w-64 border-solid border-2 rounded-lg border-sky-500 m-auto"
                        key={el.id}
                        id={el.id.toString()}
                        value={el.eng}
                        onClick={userId ? tryIt : tryItForUnknown}
                        > 
                        {el.eng}
                    </button>
                    )
            })}
        </div>
    )
}