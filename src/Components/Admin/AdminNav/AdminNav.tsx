import { Link } from "react-router-dom";
export default function AdminNav(){
    return(
        <div className="flex flex-row justify-between px-4">
            <Link to={'/admin'} className="text-center"> Админка </Link>
            <Link to={'/addNewWord'} className="text-center"> Добавить новое слово </Link>
            <Link to={'/changeWord'} className="text-center"> Редактировать слова </Link>
            <Link to={'/addNewGroup'} className="text-center"> Добавить новую группу слов </Link>
            <Link to={'/changeGroup'} className="text-center"> Редактировать группу слов </Link>
        </div>
    )
}