import { Link } from "react-router-dom"
import './GroupsOfWords.css'
export default function GroupsOfWords(props:any){
    return (
        <div className="GroupsOfWords">
                    <Link to={'/nouns'}>
                        <div className="GroupsOfWords__oneGroupOfWord">
                            10 Nouns
                        </div>
                    </Link>
                    <Link to={'/adjectives'}> 
                        <div className="GroupsOfWords__oneGroupOfWord">
                            10 Adjectives
                        </div>
                    </Link>
        </div>
    )
}