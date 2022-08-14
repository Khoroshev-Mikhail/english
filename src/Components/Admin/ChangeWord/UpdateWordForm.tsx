import { useEffect, useId, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, dictionaryThunk, Group, RootState } from "../../../store/store"

export default function UpdateWordForm(props: {id: number}){
    //Глобальные методы
    const dispatch = useDispatch<AppDispatch>()

    //Глобальное состояние
    const {userId, pwd} = useSelector((state: RootState) => state.userData)
    const dictionary = useSelector((state: RootState) => state.dictionary)
    const allGroups = useSelector((state: RootState) => state.groups)
    
    //Локальное состояние
    //const [word, setWord] = useState(dictionary.find(el => el.id === props.id)) //Как переписать на это????
    const [word, setWord] = useState(dictionary.filter(el => el.id === props.id)[0])
    const [visibleGroups, setVisibleGroups] = useState<boolean>(false)

    //Эффекты
    useEffect(()=>{
        setWord(dictionary.filter(el => el.id === props.id)[0])
    },[dictionary])

    //Переменные для рендеринга
    const id = useId()

    //Функции для рендеринга
    function handerlForm(e: any){
        e.preventDefault()
        fetch('http://localhost:3001/updateDictionary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({userId, pwd, word})
        })
        .then(result => {
            console.log(result)
            if(result.ok){
                dispatch(dictionaryThunk())
            }
        }, error => {
            console.log('error in Update Word Form', error.message)
        })
    }
    function deleteWord(e: any){
        fetch('http://localhost:3001/deleteDictionary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({userId, pwd, idWord: word.id})
        })
        .then(result => {
            console.log(result)
            if(result.ok){
                dispatch(dictionaryThunk())
            }
        }, error => {
            console.log('error in Delete Word', error.message)
        })
    }

    return(
        <div className="">
            <form onSubmit={handerlForm}>
                <input name="id" className="border-2" type={'text'} value={word.id} disabled={true}/>
                <input name="eng" className="border-2" value={word.eng} type={'text'} onChange={(e)=>{setWord(state => ({...state, eng: e.target.value}))}}/>
                <input name="rus" className="border-2" value={word.rus} type={'text'} onChange={(e)=>{setWord(state => ({...state, rus: e.target.value}))}}/>
                <div className="str__4">
                    <button type="button" onClick={()=>setVisibleGroups(!visibleGroups)}>{visibleGroups ? 'Скрыть' : 'Показать'} группы</button>
                    {visibleGroups && allGroups.map((group: Group, i) => {
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
                <button type="button" onClick={deleteWord}>delete</button>
                </form>
        </div>
        
    )
}