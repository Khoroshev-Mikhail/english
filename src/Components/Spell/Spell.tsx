import { useEffect, useState } from "react"
import { unlerned } from "../../store/myFns"
import { Word } from "../../store/store"
import { PropsForLerning } from "../Main/Main"
import './Spell.css'

export default function Spell(props: PropsForLerning){
    //Render на каждый клик
    const [random, setRandom] = useState<Word>(unlerned(props.vocabular, props.lerned))
    const [answer, setAnswer] = useState<string>('')
    const [display, setDisplay] = useState<string[]>([])
    function tryIt(e: any){
        setDisplay(arr => arr.concat(e.target.id))
        setAnswer(res => res + e.target.value)
    }
    useEffect(()=>{
        if(answer === random.eng){
            props.setLerned(random.id)
            setAnswer('')
            setRandom(unlerned(props.vocabular, props.lerned))
        }
    },[answer])
    /*
        Добавить функцию по клику на буквы в ответе
    */
    return(
        <div className="Spell">
            <div className="Spell__answerString"> {answer.split('').map((el, i) =>{
                const id:string = el + i
                return (
                    <button key={i+100}>
                        {el}
                    </button>
                    )
            })} </div>
            {random.eng.split('').map((el, i) => {
                const id:string = el + i
                return (
                    <button id={id} key={i} value={el} onClick={tryIt} style={{display: display.includes(id) ? 'none' : 'inline'}}>
                        {el}
                    </button>
                )
            })}
        </div>
    )
}