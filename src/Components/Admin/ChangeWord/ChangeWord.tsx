import {useState } from "react"
import ChangeWordGlobaTable from "./ChangeWordGlobaTable"
import ChangeWordWithSearch from "./ChangeWordWithSearch"

export default function ChangeWord(){
    const [visible, setVisible] = useState<boolean>(true)
    return (
          <>
            <button onClick={()=>setVisible(!visible)}>{visible ? 'Предоставить в виде таблицы' : 'Искать по одному слову'}</button>
            {visible ? <ChangeWordWithSearch/> : <ChangeWordGlobaTable/>}
          </>
    )
}