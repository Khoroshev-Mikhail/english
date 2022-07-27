import { useState } from "react"
import { falseVariantsArray, unlerned } from "../../store/myFns"
import { PropsForLerning } from "../Main/Main"

export default function EngRus(props: PropsForLerning){
    //Добавить раскрашивание кнопки по клику (правильно желтый и не правильно красный)
    const [random, setRandom] = useState(unlerned(props.vocabular, props.lerned)) //Вытащить из редакса useSelector
    const variants = falseVariantsArray(props.vocabular, random)
    const audio = new Audio(`/Audio/nouns/${random.eng}.mp3`) //В идеале парсить аудио с гугл/Яндекс-переводчика или получать с какойнибудь API
    audio.play()
    if(!random){
        return <h1>Congrats! Все слова изучены!</h1>
    }

    function tryIt(e: any){ //Какой тип е? На выходе void?
        if(e.target.value === random.eng){
            audio.play()
            setTimeout(()=>{
                props.setLerned(Number(e.target.id)) //Работают ассинхронно (после правильного клика может отрисовать то же слово)
                setRandom(unlerned(props.vocabular, props.lerned))
            }, 1000)
        } else{
            setRandom(unlerned(props.vocabular, props.lerned))
        }
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