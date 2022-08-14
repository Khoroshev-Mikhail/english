import { Link } from "react-router-dom";
export default function UserAdminNav(){
    return(
        <div className="flex flex-row flex-wrap justify-start gap-4 py-1">
            <div>Юзер админ панель:</div>
            <Link to={'/'} className="sm:text-center w-full sm:w-auto underline text-sky-500"> Добавить свой словарь </Link>
        </div>
    )
}