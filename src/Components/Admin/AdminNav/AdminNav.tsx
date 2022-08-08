import { Link } from "react-router-dom";
import './adminNav.css'
export default function AdminNav(){
    return(
        <div className="adminNav">
            <Link to={'/admin'}> Админка </Link>
            <Link to={'/addNewWord'}> Добавить новое слово </Link>
            <Link to={'/changeWord'}> Редактировать слова </Link>
            <Link to={'/addNewGroup'}> Добавить новую группу слов </Link>
            <Link to={'/changeGroup'}> Редактировать группу слов </Link>
        </div>
    )
}