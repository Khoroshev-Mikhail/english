import { Link } from 'react-router-dom' 
import './oneGroupOfWords.css'
type OneGroupOfWordsProps = {
    title: string,
    russian: number[],
    english: number[],
    spell: number[],
    max: number
}
export default function OneGroupOfWords(props: OneGroupOfWordsProps){
    return (
        <div className="OneGroupOfWords">
            <h1>{props.title}</h1>
            <p><Link to="eng-rus">Английский - Русский ({props.english.length} из {props.max})</Link></p>
            {/*
            <p><Link to="rus-eng">Русский - Английский ({props.russian.length} из {props.max})</Link></p>
            <p><Link to="spell">По буквам ({props.spell.length} из {props.max})</Link></p>
            <p>Аудирование</p>
            */}
        </div>
    )
}