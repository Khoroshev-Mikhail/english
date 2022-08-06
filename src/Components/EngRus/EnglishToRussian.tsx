import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { falseVariants, randomWord } from "../../store/myFns"
import { AppDispatch, dictionaryThunk, RootState, Word } from "../../store/store"

export default function EnglishToRussian(props: { group: string }){
    const userVocabulary = useSelector((state: RootState) => state.userVocabulary)
    console.log(userVocabulary)
    const dispatch = useDispatch<AppDispatch>()
    const wordsByGroup = useSelector((state: RootState) => state.dictionary.filter((el: Word) => el.groups.includes(props.group)))
    const random = useSelector((state: RootState) => randomWord(wordsByGroup, state.userVocabulary.englishToRussian))
    const [tryAgain, setTryAgain] = useState(true) //Или как вызвать перерендер компонента при неправильном ответе?
    let variants = falseVariants(wordsByGroup, random)
    const audio = new Audio(`/Audio/nouns/${random.eng}.mp3`) //В идеале парсить аудио с гугл/Яндекс-переводчика или получать с какойнибудь API
    audio.play()
    function tryIt(e: any){
        if(e.target.value === random.eng){
            audio.play()
            setTimeout(()=>{
                const test = new Promise((resolve, reject) => {
                    resolve(fetch('http://localhost:3001/setVocabulary', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        }, 
                        body: JSON.stringify({method: 'englishToRussian', idWord: random.id})
                    }))
                })
                .then(result => {
                    dispatch(dictionaryThunk())
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
            <h1>{random.eng}</h1>
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
                            {el.rus}
                        </button>
                        )
                })}
            </div>
        </div>
    )
}