import { Link } from "react-router-dom";
import './header.css'
export default function Header(){
    //Добавить хлебные крошки
    return (
        <header>
                <Link to={'/'}>Главная</Link>
        </header>
    )
}