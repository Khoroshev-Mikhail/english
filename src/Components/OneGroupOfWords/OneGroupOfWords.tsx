import { Link } from 'react-router-dom' 
import './oneGroupOfWords.css'
export default function OneGroupOfWords(props: any){
    return (
        <div className="OneGroupOfWords">
            <h1>{props.title}</h1>
            <p><Link to="eng-rus">Английский - Русский  из </Link></p>
            <p><Link to="rus-eng">Русский - Английский </Link></p>
            <p><Link to="spell">По буквам</Link></p>
            <p><Link to="listening">Аудирование</Link></p>
        </div>
    )
}