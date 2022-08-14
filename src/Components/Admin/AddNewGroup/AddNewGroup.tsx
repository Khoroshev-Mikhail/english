import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, groupsThunk, RootState } from "../../../store/store"

export default function AddNewGroup(){
    //Глобальные методы
    const dispatch = useDispatch<AppDispatch>()

    //Глобальное состояние
    const {userId, pwd} = useSelector((state: RootState) => state.userData)
    const allGroups = useSelector((state: RootState) => state.groups)

    //Локальное состояние
    const [eng, setEng] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    //Переменные для рендеринга
    const nextId = Math.max(...allGroups.map(el => el.id)) + 1 

    //Функции для рендеринга
    function handlerSubmit(e: any){
        e.preventDefault()
        fetch('http://localhost:3001/setGroups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({userId, pwd, eng, title})
        })
        .then(result => {
            console.log(result)
            setEng('')
            setTitle('')
            dispatch(groupsThunk())
        }, error => {console.log('error in the Add New Group', error.message)})
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
                            <td><input type="text" className="border-2" value={nextId} disabled={true} /></td>
                            <td><input type="text" className="border-2" value={eng} onChange={(e)=>setEng(e.target.value)} /></td>
                            <td><input type="text" className="border-2" value={title} onChange={(e)=>setTitle(e.target.value)} /></td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="Добавить новую группу" />
            </form>
        </div>
    )
}