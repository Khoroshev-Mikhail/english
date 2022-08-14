import { useId } from "react"
import { useSelector } from "react-redux"
import { RootState, Word } from "../../../store/store"
import UpdateWordForm from "./UpdateWordForm"

export default function ChangeWord(){
    const dictionary = useSelector((state: RootState) => state.dictionary)
    const id = useId()

    return (
        <div className="globalTableWords">
            <div className="topbar">
                <div className="topbar__1">_id</div>
                <div className="topbar__2">eng</div>
                <div className="topbar__3">rus</div>
                <div className="topbar__4">groups</div>
            </div>

            {dictionary.map((el: Word, i) => {
                return (
                    <UpdateWordForm id={el.id} key={id + i}/>
                )
            })}
        </div>
    )
}