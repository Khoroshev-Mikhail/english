import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { randomWord, wordForSpell } from "../../store/myFns"
import { setSpell, Word } from "../../store/store"
import './Spell.css'

export default function Spell(props: {group: string}){
    const dispatch = useDispatch()
    const wordsByGroup = useSelector((state:any) => state.dictionary.filter((el: Word) => el.groups.includes(props.group)))
    const lerned = useSelector((state: any) => state.userVocabulary.spell)

    //ИСПОЛЬЗУЮ ЛОКАЛЬНЫЙ СТЕЙТ, ЧТОБЫ НЕБЫЛО ПЕРЕРЕСОВКИ ПРИ КАЖДОМ КЛИКЕ, ЭТО ВЕРНО?
    //
    //
    const [random, setRandom] = useState<Word>(randomWord(wordsByGroup, lerned))
    const [answer, setAnswer] = useState<string[ ]>([])
    const [wordBySpell, setWordBySpell] = useState(wordForSpell(random.eng)) //для статичного расположение букв при обратном клике
    const audio = new Audio(`/Audio/nouns/${random.eng}.mp3`) //В идеале парсить аудио с гугл/Яндекс-переводчика или получать с какойнибудь API
    function tryIt(e: any){
        setAnswer(answer => answer.concat(e.target.value))
    }
    function backLetter(e: any){
        setAnswer(answer => answer.filter(letter => letter !== e.target.value))
    }
    //Или как сделать чтобы работало синхронно в функции tryIt?
    useEffect(()=>{
        if(answer.map(el => el[1]).join('') === random.eng){
            audio.play()
            setTimeout(()=>{
                dispatch(setSpell(random.id))
                setAnswer([])
                setRandom(randomWord(wordsByGroup, lerned))
            }, 1000)
        }
    }, [answer])
    useEffect(()=>{
        setWordBySpell(wordForSpell(random.eng))
    }, [random])
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