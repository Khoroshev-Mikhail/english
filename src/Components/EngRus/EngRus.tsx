import { useState } from "react"
import { falseVariantsArray, unlerned } from "../../store/myFns"
import { PropsForLerning } from "../Main/Main"

export default function EngRus(props: PropsForLerning){
    //Добавить раскрашивание кнопки по клику (правильно желтый и не правильно красный)
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
    //Надо указать путь
    let src = 'https://cdn-static-englishdom.gcdn.co/dynamicus/word/000/000/774/dfe12003a0a3abcb780462412f7cbdc3.mp3'
    let audio = new Audio('mountain.mp3') //Не работает ссылка
    audio.play()
    //В идеале парсить аудио с гугл/Яндекс-переводчика или получать с какойнибудь API
    function trueAnswer(id: number):void{
        audio.play()
        setTimeout(()=>props.setLerned(id), 700)
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