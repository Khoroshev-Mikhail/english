import { Link, Outlet } from 'react-router-dom' 
import './oneGroupOfWords.css'

export default function OneGroupOfWords(props: any){
    return (
        <div className="OneGroupOfWords">
            <h1>Вы выбрали группу слов {props.title}</h1>
            <p><Link to="rus-eng">Русский - Английский</Link></p>
            <p><Link to="rus-eng">Английский - Русский</Link></p>
            <p>Собери последовательность букв</p>
            <p>Аудирование</p>
            <Outlet />
        </div>
    )
}