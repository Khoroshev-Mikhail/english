import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { randomWord, wordForSpell } from "../../store/myFns"
import { AppDispatch, RootState, vocabularThunk, Word } from "../../store/store"
import './Spell.css'

export default function Spell(props: {group: string}){
    const dispatch = useDispatch<AppDispatch>()
    const wordsByGroup = useSelector((state:any) => state.dictionary.filter((el: Word) => el.groups.includes(props.group)))
    const lerned = useSelector((state: any) => state.userVocabulary.spell)
    
    //ЗАЦИКЛИВАЕТСЯ. почему?
    //const random = useSelector((state: RootState) => randomWord(wordsByGroup, state.userVocabulary.spell))
    //

    const [random, setRandom] = useState<Word>(randomWord(wordsByGroup, lerned))
    const [answer, setAnswer] = useState<string[ ]>([])
    const [wordBySpell, setWordBySpell] = useState(wordForSpell(random.eng)) //для статичного расположение букв при обратном клике
    const audio = new Audio(`/Audio/nouns/${random.eng}.mp3`) //В идеале парсить аудио с гугл/Яндекс-переводчика или получать с какойнибудь API
    function tryIt(e: any){
        setAnswer(answer => answer.concat(e.target.value))
        setWordBySpell(wordBySpell => wordBySpell.filter(letter => letter !== e.target.value))
    }
    function backLetter(e: any){
        setWordBySpell(wordBySpell => wordBySpell.concat(e.target.value))
        setAnswer(answer => answer.filter(letter => letter !== e.target.value))
    }
    //Или как сделать чтобы работало синхронно в функции tryIt?
    useEffect(()=>{
        console.log('useEffect [ANSWER]')
        if(answer.map(el => el[1]).join('') === random.eng && random.eng.length > 0){
            audio.play()
            setTimeout(()=>{
                new Promise((resolve, reject) => {
                    resolve(fetch('http://localhost:3001/setVocabulary', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        }, 
                        body: JSON.stringify({method: 'spell', idWord: random.id})
                    }))
                })
                .then(result => {
                    dispatch(vocabularThunk())
                }, error => {console.log('errorrrr')})
                setAnswer([])
                setRandom(randomWord(wordsByGroup, lerned))
            }, 1000)
        }
    }, [answer])
    useEffect(()=>{
        console.log('useEffect [RANDOM]')
        setWordBySpell(wordForSpell(random.eng))
    }, [random])
    return(
        <div className="Spell">
            <h1>{random.rus}</h1>
            <div className="Spell__answerString"> {answer.map((el, i) =>{
                return (
                    <button key={i+random.eng.length} value={el} onClick={backLetter}>
                        {el[1] /* el.at(0) не работает в safari */}
                    </button>
                    )
            })} </div>
            {wordBySpell.map((el, i) => {
                return (
                    <button key={i} value={el} onClick={tryIt}>
                        {el[1] /* el.at(0) не работает в safari */}
                    </button>
                )
            })}
        </div>
    )
}