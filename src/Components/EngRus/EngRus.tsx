import { falseVariantsArray, unlerned } from "../../store/myFns"
import { PropsForLerning } from "../Main/Main"

export default function EngRus(props: PropsForLerning){
    const random = unlerned(props.vocabular, props.lerned) //Одна строка из БД с данными по слову которого нет в словаре пользователя (объект)
    if(!random){
        return <h1>Congrats! Все слова изучены!</h1>
    }
    const arr = falseVariantsArray(props.vocabular, random) //Массив с четыремя варианта ответа (один из них правильный)(массив объектов)

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
                {arr.map(el => {
                    return (
                        <button
                            className="RusEng__Variants__Variant"
                            key={el.id}
                            onClick={el.eng !== random.eng ? () =>{} : () => trueAnswer(el.id)}> {/* Сравнить с правильным словом и если оно правильно засетать его id в выученные слова! А если нет тогда зарендерить страницу заново*/}
                            {el.rus}
                        </button>
                        )
                })}
            </div>
        </div>
    )
}