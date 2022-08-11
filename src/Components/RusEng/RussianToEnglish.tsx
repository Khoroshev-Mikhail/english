import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setVocabulary } from "../../API/API"
import { falseVariants, randomWord } from "../../store/myFns"
import { AppDispatch, RootState, Word, vocabularThunk, Group } from "../../store/store"

export default function RussianToEnglish(props: Group){
    const dispatch: AppDispatch = useDispatch()
    const userId = useSelector((state: RootState) => state.userData.userId)
    const wordsByGroup = useSelector((state: RootState) => state.dictionary.filter((el: Word) => el.groups.includes(props.eng)))
    const random = useSelector((state: RootState) => randomWord(wordsByGroup, state.userVocabulary.russianToEnglish))
    const [tryAgain, setTryAgain] = useState<boolean>(true) //Для перерисовки неправильного ответа
    
    if(!random){
        return <h1>Congrats! Все слова изучены!</h1>
    }
    let variants = falseVariants(wordsByGroup, random) //в таких случаях Объявляют заранее или можно внутри вёрстки
    const audio = new Audio(`/Audio/nouns/${random.eng}.mp3`) //В идеале парсить аудио с гугл/Яндекс-переводчика или получать с какойнибудь API

    function tryIt(e: any){
        if(e.target.value === random.eng){
            e.target.classList.add('bg-green-500')
            audio.play()
            setTimeout(()=>{
                setVocabulary(1, 'russianToEnglish', random.id)
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
                        onClick={tryIt}
                        > 
                        {el.eng}
                    </button>
                    )
            })}
        </div>
    )
}