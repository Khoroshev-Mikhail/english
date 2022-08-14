import { useId, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, dictionaryThunk, RootState } from "../../../store/store"

export default function AddNewWord(){
    //Глобальные методы
    const dispatch = useDispatch<AppDispatch>()

    //Глобальное состояние
    const {userId, pwd} = useSelector((state: RootState) => state.userData)
    const allGroups = useSelector((state: RootState) => state.groups)
    const dictionary = useSelector((state: RootState) => state.dictionary)

    //Локальное состояние
    const [eng, setEng] = useState('')
    const [rus, setRus] = useState('')
    const [groups, setGroups] = useState<string[]>([]) //Как определить тип пустого массива?

    //Переменные для рендеринга
    const id = useId()
    const nextId = Math.max(...dictionary.map(el => el.id)) + 1

    //Функции для рендеринга
    function handlerSubmit(e: any){
        //Добавить предупреждение на наличие этого слова в словаре если есть
        e.preventDefault()
        fetch('http://localhost:3001/setDictionary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({userId, pwd, eng, rus, groups})
        })
        .then(result => {
            console.log(result)
            if(result.ok){
                setRus('')
                setEng('')
                setGroups([])
                dispatch(dictionaryThunk())
            }
        }, error => {console.log('error in Add New Word', error.message)})
    }
    return (
        <div>
            <h1>Добавить новое слово</h1>
            <form onSubmit={handlerSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>_nextId</th>
                            <th>Русский</th>
                            <th>Английский</th>
                            <th>Группа слов</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input className="border-2" type="text" value={nextId} disabled={true} /></td>
                            <td><input className="border-2" type="text" value={rus} onChange={(e)=>setRus(e.target.value)} /></td>
                            <td><input className="border-2" type="text" value={eng} onChange={(e)=>setEng(e.target.value)} /></td>
                            <td>
                            {allGroups.map((el: any, i) => {
                                return (
                                    <div key={id + i}><input type={'checkbox'} onChange={()=>setGroups((state: string[]) => [...state, el.eng])}/> {el.title}</div>
                                )
                            })}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="Добавить слово в словарь" />
            </form>
        </div>
    )
}