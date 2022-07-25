import { useEffect, useState } from "react"
import { unlerned } from "../../store/myFns"
import { Vocabular } from "../../store/store"

type SpellProps = {
    lerned: number[],
    vocabular: Vocabular,
    setLerned: (id: number) => void,
}
export default function Spell(props: SpellProps){
    //Render на каждый клик
    const random = unlerned(props.vocabular, props.lerned).eng //Одна строка из БД с данными по слову которого нет в словаре пользователя (объект)
    const [answer, setAnswer] = useState('')
    function tryIt(e: any){
        setAnswer(res => res + e.target.value)
    }
    useEffect(()=>{
        if(answer === random){
            alert('molotok')
        }
    },[answer])
    return(
        <div className="Spell">
            <div className="Spell__answerString">{answer}</div>
            {random.split('').map((el, i) => {
                return (
                    <button key={i} value={el} onClick={tryIt}>
                        {el}
                    </button>
                )
            })}
        </div>
    )
}