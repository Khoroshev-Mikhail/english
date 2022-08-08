import { useEffect, useId, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, dictionaryThunk, Group, RootState, Word } from "../../../store/store"

export default function ChangeWordWithSearch(){
    //могуть быть одинаковые слова с разными id
    const id = useId()
    const dispatch = useDispatch<AppDispatch>()
    const dictionary = useSelector((state: RootState) => state.dictionary)
    const allGroups = useSelector((state: RootState) => state.groups)
    const [search, setSearch] = useState<string>('')
    const nonExistenId = 9999999
    const [word, setWord] = useState<Word>({id: nonExistenId, eng: '', rus: '', groups: []})
    function handler(e: any){
        e.preventDefault()
        if(word.id !== 0){
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
                setSearch('')
            }, error => {alert('errorrrr')})
        }
    }
    useEffect(()=>{
        if(dictionary.map(el => el.eng).includes(search)){
            const searchingWord = dictionary.filter(el => el.eng === search)[0]
            setWord(searchingWord)
        } else{
            setWord({id: nonExistenId, eng: '', rus: '', groups: []})
        }
    },[search])
    return (
        <div>
            <form onSubmit={handler}>
                <table style={{border: '1px solid black'}}>
                    <thead>
                        <tr>
                            <th>_id</th>
                            <th>eng</th>
                            <th>rus</th>    
                            <th>groups</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{word.id === nonExistenId ? '-' : word.id}</td>
                            <td><input type={'text'} disabled={word.id === nonExistenId} value={word.eng} onChange={(e) => setWord({...word, eng: e.target.value})}/></td>
                            <td><input type={'text'} disabled={word.id === nonExistenId} value={word.rus} onChange={(e) => setWord({...word, rus: e.target.value})}/></td>
                            <td>
                                {allGroups.map((el: Group, i) => {
                                    return (
                                        <div key={id+i}>
                                            <input type={'checkbox'} name={el.eng} value={el.eng} checked={word.groups.includes(el.eng) ? true : false} 
                                            onChange={(e)=>{
                                                if(! e.target.checked){
                                                    setWord((word: Word) => ({...word, groups: word.groups.filter(str => str !== el.eng)}))
                                                } else{
                                                    setWord((word: Word) => ({...word, groups: [...word.groups, el.eng]}))
                                                }
                                            }}/>
                                            {el.title}
                                        </div>
                                    )
                                })}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type={'submit'} value={'Сохранить изменения'}/>
            </form>
            <input type={'text'} value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Введите слово"/>
        </div>
    )
}