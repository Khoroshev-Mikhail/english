import { useState } from "react"
import { falseVariantsArray, unlerned } from "../../store/myFns"
import { PropsForLerning } from "../Main/Main"
import './RusEng.css'

export default function RusEng(props: PropsForLerning){
    const [random, setRandom] = useState(unlerned(props.vocabular, props.lerned))
    const variants = falseVariantsArray(props.vocabular, random)
    if(!random){
        return <h1>Congrats! Все слова изучены!</h1>
    }
    console.log(props.lerned)
    function tryIt(e: any){
        if(e.target.value === random.eng){
            props.setLerned(Number(e.target.id)) //Работают ассинхронно (после правильного клика может отрисовать то же слово)
            setRandom(unlerned(props.vocabular, props.lerned))
        } else{
            setRandom(unlerned(props.vocabular, props.lerned))
        }
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
                            onClick={tryIt}>
                            {el.eng}
                        </button>
                        )
                })}
            </div>
        </div>
    )
}