import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminNav from "../Admin/AdminNav/AdminNav";
import './header.css'
export default function Header(){
    const userId = useSelector((state: any) => state.userVocabulary.userId)
    //Добавить хлебные крошки
    return (
        <>
            {userId === 1 && <AdminNav /> /*надо вывести в глобальную переменную*/}
            <header>
                <Link to={'/'}> Слова </Link>
            </header>
        </>
    )
}