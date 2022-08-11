import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, authorizationThunk } from "../../store/store"

export default function Login(props: any){
    const dispatch = useDispatch<AppDispatch>()
    const [login, setLogin] = useState('')
    const [pwd, setPwd] = useState('')
    function tryLogin(e: any){
        e.preventDefault()
        dispatch(authorizationThunk({login, pwd}))
    }
    return(
        <div>
            <form>
                <input className="border-2" type={'text'} value={login} onChange={(e)=>{setLogin(e.target.value)}}/>
                <input className="border-2" type={'text'} value={pwd} onChange={(e)=>{setPwd(e.target.value)}}/>
                <button onClick={tryLogin}>Login</button>
            </form>
        </div>
    )
}