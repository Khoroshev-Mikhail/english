import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { falseVariants, randomWord } from "../../store/myFns"
import { AppDispatch, RootState, Word, vocabularThunk } from "../../store/store"

export default function RussianToEnglish(props: {group: string}){
    const dispatch: AppDispatch = useDispatch()
    const wordsByGroup = useSelector((state: RootState) => state.dictionary.filter((el: Word) => el.groups.includes(props.group)))
    const random = useSelector((state: RootState) => randomWord(wordsByGroup, state.userVocabulary.russianToEnglish))
    const [tryAgain, setTryAgain] = useState<boolean>(true) //Для перерисовки неправильного ответа
    let variants = falseVariants(wordsByGroup, random) //в таких случаях Объявляют заранее или можно внутри вёрстки
    const audio = new Audio(`/Audio/nouns/${random.eng}.mp3`) //В идеале парсить аудио с гугл/Яндекс-переводчика или получать с какойнибудь API

    function tryIt(e: any){
        if(e.target.value === random.eng){
            audio.play()
            setTimeout(()=>{
                new Promise((resolve, reject) => {
                    resolve(fetch('http://localhost:3001/setVocabulary', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        }, 
                        body: JSON.stringify({method: 'russianToEnglish', idWord: random.id})
                    }))
                })
                .then(result => {
                    dispatch(vocabularThunk())
                }, error => {console.log('errorrrr')})
            }, 1000)
        } else {
            setTryAgain(!tryAgain)
        }
    }
    if(!random){
        return <h1>Congrats! Все слова изучены!</h1>
    }

    return (
        <div className="RusEng">
            <h1>{random.rus}</h1>
            <div className="RusEng__Variants">
                {variants.map(el => {
                    return (
                        <button
                            className="RusEng__Variants__Variant"
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
        </div>
    )
}