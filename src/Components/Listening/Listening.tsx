import { useDispatch, useSelector } from "react-redux"
import { randomWord } from "../../store/myFns"
import { AppDispatch, Group, RootState, vocabularThunk, Word } from "../../store/store"

export default function Listening(props: Group){
    //Добавить автофокус
    //Добавить баттон nextWord (на случай если пользователь не сможет угадать)
    const dispatch: AppDispatch = useDispatch()
    const wordsByGroup = useSelector((state: RootState) => state.dictionary.filter((el: Word) => el.groups.includes(props.eng)))
    const random = useSelector((state: RootState) => randomWord(wordsByGroup, state.userVocabulary.russianToEnglish))
    const audio = new Audio(`/Audio/nouns/${random.eng}.mp3`)
    audio.play()
    if(!random){
        return <h1>Congrats! Все слова изучены!</h1>
    }
    function tryIt(e: any){
        if(e.target.value === random.eng){
            e.target.disabled = true
            audio.play()
            setTimeout(()=>{
                e.target.value = ''
                e.target.disabled = false
                new Promise((resolve, reject) => {
                    resolve(fetch('http://localhost:3001/setVocabulary', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        }, 
                        body: JSON.stringify({method: 'listening', idWord: random.id})
                    }))
                })
                .then(result => {
                    dispatch(vocabularThunk())
                }, error => {console.log('errorrrr')})
            },1000)
        }
    }
    function repeat(){
        audio.play()
    }
    return(
        <div>
            <input type={'text'} onChange={tryIt}/>
            <button onClick={repeat}>Repeat sound</button>
        </div>
    )
}