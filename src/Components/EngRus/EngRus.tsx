import { falseVariantsArray, unlerned } from "../../store/myFns"
import { Vocabular } from "../../store/store"

type RusEngProps = {
    lerned: number[],
    vocabular: Vocabular,
    setLerned: (id: number) => void,
}
export default function EngRus(props: RusEngProps){
    const random = unlerned(props.vocabular, props.lerned) //Одна строка из БД с данными по слову которого нет в словаре пользователя (объект)
    if(!random){
        return <h1>Congrats! Все слова изучены!</h1>
    }
    const arr = falseVariantsArray(props.vocabular, random) //Массив с четыремя варианта ответа (один из них правильный)(массив объектов)
    return (
        <div className="RusEng">  
            <h1>{random.eng}</h1>
            <div className="RusEng__Variants">
                {arr.map(el => {
                    return (
                        <button
                            className="RusEng__Variants__Variant"
                            key={el.id}
                            onClick={el.eng !== random.eng ? undefined : () => props.setLerned(el.id)}> {/* Сравнить с правильным словом и если оно правильно засетать его id в выученные слова! А если нет тогда зарендерить страницу заново*/}
                            {el.rus}
                        </button>
                        )
                })}
            </div>
        </div>
    )
}