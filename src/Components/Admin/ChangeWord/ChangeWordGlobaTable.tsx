import { useId } from "react"
import { useSelector } from "react-redux"
import { Group, RootState, Word } from "../../../store/store"

export default function(){
    const dictionary = useSelector((state: RootState) => state.dictionary)
    const allGroups = useSelector((state: RootState) => state.groups)
    const id = useId()
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>eng</th>
                        <th>rus</th>
                        <th>groups</th>
                    </tr>
                </thead>
                <tbody>
                    {/** добавить тут форму Form, но скорее всего придется переписать через div */}
                    {dictionary.map((el, i) => {
                        return (
                            <tr key={id+i}>
                                <td>{el.id}</td>
                                <td>{el.eng}</td>
                                <td>{el.rus}</td>
                                <td>{allGroups.map((group: Group, groupIndex) => {
                                    return (
                                        <div key={id+i+groupIndex}>
                                            <input 
                                                type={'checkbox'}
                                                value={group.eng}
                                                checked={el.groups.includes(group.eng) ? true : false}
                                                onChange={(e)=>{
                                                    //Дописать функцию
                                                }}
                                            />
                                            {group.title}
                                        </div>
                                    )
                                })}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}