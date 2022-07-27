import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { unlerned, wordForSpell } from "../../store/myFns"
import { Word } from "../../store/store"
import { PropsForLerning } from "../Main/Main"
import './Spell.css'

export default function Spell(props: PropsForLerning){
    const [random, setRandom] = useState<Word>(unlerned(props.vocabular, props.lerned))
    const random2 = useSelector((state: any) => state.vocabularEnglish)
    console.log(random2)
    const [answer, setAnswer] = useState<string[ ]>([])
    const [wordBySpell, setWordBySpell] = useState(wordForSpell(random.eng))
    const audio = new Audio(`/Audio/nouns/${random.eng}.mp3`) //В идеале парсить аудио с гугл/Яндекс-переводчика или получать с какойнибудь API
    function tryIt(e: any){
        setAnswer(answer => answer.concat(e.target.value))
    }
    function backLetter(e: any){
        setAnswer(answer => answer.filter(letter => letter !== e.target.value))
    }
    useEffect(()=>{ //Лучше useEffect или внутри функции tryIt?
        if(answer.map(el => el[1]).join('') === random.eng){
            audio.play()
            setTimeout(()=>{
                props.setLerned(random.id)
                setAnswer([])
                setRandom(unlerned(props.vocabular, props.lerned))
            }, 1000)
        }
    },[answer])
    return(
        <div className="Spell">
            <h1>{random.rus}</h1>
            <div className="Spell__answerString"> {answer.map((el, i) =>{
                return (
                    <button key={i+random.eng.length} value={el} onClick={backLetter}>
                        {el.at(1)}
                    </button>
                    )
            })} </div>
            {wordBySpell.map((el, i) => {
                return (
                    <button key={i} value={el} onClick={tryIt} style={{display: answer.includes(el) ? 'none' : 'inline'}}>
                        {el.at(1)}
                    </button>
                )
            })}
        </div>
    )
}