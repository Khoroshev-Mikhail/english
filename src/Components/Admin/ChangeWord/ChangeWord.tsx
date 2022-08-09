import { useId } from "react"
import { useSelector } from "react-redux"
import { Group, RootState, Word } from "../../../store/store"
import './ChangeWord.css'
import UpdateWordForm from "./UpdateWordForm"

export default function ChangeWord(){
    const dictionary = useSelector((state: RootState) => state.dictionary)
    const allGroups = useSelector((state: RootState) => state.groups)
    const id = useId()
    function handerlForm(e: any){
      e.preventDefault()
      console.log(e)
    }
    return (
        <div className="globalTableWords">
            <div className="topbar">
                <div className="topbar__1">_id</div>
                <div className="topbar__2">eng</div>
                <div className="topbar__3">rus</div>
                <div className="topbar__4">groups</div>
            </div>
            {dictionary.map((el, i) => {
                return (
                    <UpdateWordForm id={el.id} key={id+i}/>
                )
            })}
        </div>
    )
}