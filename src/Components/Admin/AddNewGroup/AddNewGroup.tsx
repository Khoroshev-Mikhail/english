import { useId, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, dictionaryThunk, groupsThunk, RootState } from "../../../store/store"

export default function AddNewGroup(){
    const dispatch = useDispatch<AppDispatch>()
    const id = useId()
    const [eng, setEng] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const allGroups = useSelector((state: RootState) => state.groups)
    const nextId = Math.max(...allGroups.map(el => el.id)) + 1 //Не работает после первого добавления
    function handlerSubmit(e: any){
        e.preventDefault()
        new Promise((resolve, reject) => {
            resolve(fetch('http://localhost:3001/setGroups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }, 
                body: JSON.stringify({eng, title})
            }))
        }).then(result => {
            setEng('')
            setTitle('')
            dispatch(groupsThunk())
        }, error => {console.log('errorrrr')})
    }
    return (
        <div>
            <h1>Добавить новую группу</h1>
            <form onSubmit={handlerSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>_nextId</th>
                            <th>Eng</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" value={nextId} disabled={true} /></td>
                            <td><input type="text" value={eng} onChange={(e)=>setEng(e.target.value)} /></td>
                            <td><input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /></td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="Добавить новую группу" />
            </form>
        </div>
    )
}