import { useId } from "react"
import { useSelector } from "react-redux"
import { Group, RootState } from "../../../store/store"
import UpdateGroupForm from "./UpdateGroupForm"

export default function ChangeGroup(){
    //Глобальное состояние
    const allGroups = useSelector((state: RootState) => state.groups)

    //Переменные для рендеринга
    const id = useId()
    
    return (
        <div className="globalTableWords">
            <div className="topbar">
                <div className="topbar__1">_id</div>
                <div className="topbar__2">eng</div>
                <div className="topbar__3">rus</div>
                <div className="topbar__4">groups</div>
            </div>
            {allGroups.map((el: Group, i) => {
                return (
                    <UpdateGroupForm id={el.id} key={id + i}/>
                )
            })}
        </div>
    )
}