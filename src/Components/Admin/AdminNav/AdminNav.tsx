import { Link } from "react-router-dom";
export default function AdminNav(){
    return(
        <div className="flex flex-row flex-wrap justify-start gap-4 py-1">
            <div>Админ Панель:</div>
            <Link to={'/addNewWord'} className="sm:text-center w-full sm:w-auto underline text-sky-500"> Добавить новое слово </Link>
            <Link to={'/changeWord'} className="sm:text-center w-full sm:w-auto underline text-sky-500"> Редактировать слова </Link>
            <Link to={'/addNewGroup'} className="sm:text-center w-full sm:w-auto underline text-sky-500"> Добавить новую группу слов </Link>
            <Link to={'/changeGroup'} className="sm:text-center w-full sm:w-auto underline text-sky-500"> Редактировать группу слов </Link>
        </div>
    )
}