import { Link } from 'react-router-dom' 
import './oneGroupOfWords.css'

export default function OneGroupOfWords(props: { title: string }){
    return (
        <div className="OneGroupOfWords">
            <h1>{props.title}</h1>
            <p><Link to="rus-eng">Русский - Английский</Link></p>
            <p><Link to="eng-rus">Английский - Русский</Link></p>
            <p><Link to="spell">Собери последовательность букв</Link></p>
            <p>Аудирование</p>
        </div>
    )
}