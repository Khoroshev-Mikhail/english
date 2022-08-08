import { useId, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, dictionaryThunk, RootState } from "../../../store/store"

export default function AddNewWord(){
    const dispatch = useDispatch<AppDispatch>()
    const allGroups = useSelector((state: RootState) => state.groups)
    const [eng, setEng] = useState<string>('')
    const [rus, setRus] = useState<string>('')
    const [groups, setGroups] = useState(['']) //Как определить тип пустого массива?
    function handlerSubmit(e: any){
        //Добавить предупреждение на наличие этого слова в словаре если есть
        e.preventDefault()
        setGroups((state: any) => state.filter((el :any) => el !== '')) //Рефакторинг после исправления типа
        new Promise((resolve, reject) => {
            resolve(fetch('http://localhost:3001/setDictionary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }, 
                body: JSON.stringify({eng: eng, rus: rus, groups: groups})
            }))
        }).then(result => {
            dispatch(dictionaryThunk())
            setRus('')
            setEng('')
            setGroups(['']) //Рефакторинг после исправления типа
        }, error => {console.log('errorrrr')})
    }
    const id = useId()
    return (
        <div>
            <h1>Добавить новое слово</h1>
            <form onSubmit={handlerSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Русский</th>
                            <th>Английский</th>
                            <th>Группа слов</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" value={rus} onChange={(e)=>setRus(e.target.value)} /></td>
                            <td><input type="text" value={eng} onChange={(e)=>setEng(e.target.value)} /></td>
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
                <input type="submit" value="Отправить" />
            </form>
            <h1>Изменить слово</h1>
            <h1>Добавить новую группу</h1>
            <h1>Изменить группу</h1>
        </div>
    )
}