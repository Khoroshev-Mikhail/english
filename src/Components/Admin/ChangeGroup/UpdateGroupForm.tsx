import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, Group, groupsThunk, RootState } from "../../../store/store"

export default function UpdateGroupForm(props: {id: number}){
    //Глобальные методы
    const dispatch = useDispatch<AppDispatch>()

    //Глобальный стейт
    const {userId, pwd} = useSelector((state: RootState) => state.userData)
    const allGroups = useSelector((state: RootState) => state.groups)

    //Локальный стейт
    //const [group, setGroup] = useState<Group>(allGroups.find((el: Group) => el.id === props.id)) //Обработать случай undefined
    const [group, setGroup] = useState<Group>(allGroups.filter((el: Group) => el.id === props.id)[0])

    //Эффекты
    useEffect(()=>{
        setGroup(allGroups.filter((el: Group) => el.id === props.id)[0])
    },[allGroups])

    //Функции для рендеренига
    function handerlForm(e:any){
        e.preventDefault()
        fetch('http://localhost:3001/updateGroups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({userId, pwd, group})
        })
        .then(response => {
            console.log(response)
            if(response.ok){
                dispatch(groupsThunk())
            }
        }, error => {
            console.log('error in Update Group Form', error.message)
        })
    }
    function deleteWord(e: any){
        fetch('http://localhost:3001/deleteGroups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({userId, pwd, idGroup: group.id})
        })
        .then(result => {
            console.log(result)
            if(result.ok){
                dispatch(groupsThunk())
            }
        }, error => {
            console.log('error in Delete Group', error.message)
        })
    }
    return(
        <div className="">
            <form onSubmit={handerlForm}>
                <div style={{display: 'inline'}}>{group.id}</div>
                <input name="eng" className="border-2" value={group.eng} type={'text'} onChange={(e)=>{setGroup((state) => ({...state, eng: e.target.value}))}}/>
                <input name="rus" className="border-2" value={group.title} type={'text'} onChange={(e)=>{setGroup(state => ({...state, title: e.target.value}))}}/>
                <button>save</button>
                <button type="button" onClick={deleteWord}>delete</button>
            </form>
        </div>
    )
}