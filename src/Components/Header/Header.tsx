import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminNav from "../Admin/AdminNav/AdminNav";
export default function Header(){
    const userId = useSelector((state: any) => state.userVocabulary.userId)
    //Добавить хлебные крошки
    return (
        <>
            {userId === 1 && <AdminNav /> /*надо вывести в глобальную переменную*/}
            <header className="flex flex-row flex-wrap justify-start gap-4 py-1">
                <Link to={'/'} className="sm:text-center w-full sm:w-auto underline text-sky-500"> Слова </Link>
                <span>Адаптированные тексты</span>
                <span>Авторизация</span>
            </header>
        </>
    )
}