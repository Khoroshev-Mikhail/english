import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { falseVariants, randomWord } from "../../store/myFns"
import { setUserVocabulary, Words } from "../../store/store"

export default function EngRus2(props: {group: string}){
    const dispatch = useDispatch()
    const wordsByGroup = useSelector((state:any) => state.dictionary.filter((el: Words) => el.groups.includes(props.group)))
    const lerned = useSelector((state: any) => state.userVocabulary)
    const [err, setEtt] = useState(true) //Или как вызвать перерендер компонента?
    console.log(lerned)
    let random = randomWord(wordsByGroup, lerned)
    let variants = falseVariants(wordsByGroup, random)
    const audio = new Audio(`/Audio/nouns/${random.eng}.mp3`) //В идеале парсить аудио с гугл/Яндекс-переводчика или получать с какойнибудь API
    audio.play()

    function tryIt(e: any){
        if(e.target.value === random.eng){
            audio.play()
            setTimeout(()=>{
                dispatch(setUserVocabulary(random.id))
            }, 1000)
        } else{
            setEtt(false)
        }
    }
    if(!random){
        return <h1>Congrats! Все слова изучены!</h1>
    }
    console.log(random)
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