import { useEffect, useId, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, dictionaryThunk, Group, RootState } from "../../../store/store"
import './updateWordForm.css'

export default function UpdateWordForm(props: {id: number}){
    const dispatch = useDispatch<AppDispatch>()
    let dictionary = useSelector((state: RootState) => state.dictionary)
    //const [word, setWord] = useState(dictionary.find(el => el.id === props.id)) //Как переписать на это????
    const [word, setWord] = useState(dictionary.filter(el => el.id === props.id)[0])
    const allGroups = useSelector((state: RootState) => state.groups)
    function handerlForm(e:any){
        e.preventDefault()
        new Promise((resolve, reject) => {
            resolve(fetch('http://localhost:3001/updateDictionary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }, 
                body: JSON.stringify(word)
            }))
        })
        .then(result => {
            dispatch(dictionaryThunk())
        }, error => {alert('errorrrr')})
    }
    const id = useId()
    useEffect(()=>{
        setWord(dictionary.filter(el => el.id === props.id)[0])
    },[dictionary])
    return(
        <div className="str">
            <form onSubmit={handerlForm}>
                <input name="id" className="str__1" type={'text'} value={word.id} disabled={true}/>
                <input name="eng" className="str__2" value={word.eng} type={'text'} onChange={(e)=>{setWord(state => ({...state, eng: e.target.value}))}}/>
                <input name="rus" className="str__3" value={word.rus} type={'text'} onChange={(e)=>{setWord(state => ({...state, rus: e.target.value}))}}/>
                <div className="str__4">
                    {allGroups.map((group: Group, i) => {
                        return (
                                <label key={id+i}>
                                <input 
                                    type={'checkbox'}
                                    value={group.eng}
                                    checked={word.groups.includes(group.eng) ? true : false}
                                    onChange={(e)=>{
                                        if(! e.target.checked){
                                            setWord(state => ({...state, groups: state.groups.filter(el => el !== group.eng)}))
                                        } else {
                                            setWord(state => ({...state, groups: [...state.groups, group.eng]}))
                                        }
                                    }}
                                />
                                {group.title}
                                </label>
                        )
                    })}
                </div>
                <button>save</button>
                </form>
        </div>
    )
}