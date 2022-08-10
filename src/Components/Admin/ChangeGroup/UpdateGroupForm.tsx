import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, Group, groupsThunk, RootState } from "../../../store/store"
import './updateGroupForm.css'

export default function UpdateGroupForm(props: {id: number}){
    const dispatch = useDispatch<AppDispatch>()
    const allGroups = useSelector((state: RootState) => state.groups)
    //const [group, setGroup] = useState<Group>(allGroups.find((el: Group) => el.id === props.id)) //Обработать случай undefined
    const [group, setGroup] = useState<Group>(allGroups.filter((el: Group) => el.id === props.id)[0])

    function handerlForm(e:any){
        e.preventDefault()
        fetch('http://localhost:3001/updateGroups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify(group)
        })
        .then(result => {
            //нужно ли тут уточнять статус200?
            dispatch(groupsThunk())
        }, error => {console.log('errorrrr')})
    }
    useEffect(()=>{
        setGroup(allGroups.filter((el: Group) => el.id === props.id)[0])
    },[allGroups])
    return(
        <div className="str">
            <form onSubmit={handerlForm}>
                <input name="id" className="str__1 border-2" type={'text'} value={group.id} disabled={true}/>
                <input name="eng" className="str__2 border-2" value={group.eng} type={'text'} onChange={(e)=>{setGroup((state) => ({...state, eng: e.target.value}))}}/>
                <input name="rus" className="str__3 border-2" value={group.title} type={'text'} onChange={(e)=>{setGroup(state => ({...state, title: e.target.value}))}}/>
                <button>save</button>
                </form>
        </div>
    )
}