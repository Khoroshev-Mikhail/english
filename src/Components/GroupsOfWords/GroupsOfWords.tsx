import { Link } from "react-router-dom"
import './GroupsOfWords.css'
export default function GroupsOfWords(){
    return (
        <div className="GroupsOfWords">
                    <Link to={'/nouns'}>
                        <div className="GroupsOfWords__oneGroupOfWord">
                            15 Nouns
                        </div>
                    </Link>
                    <Link to={'/adjectives'}> 
                        <div className="GroupsOfWords__oneGroupOfWord">
                            15 Adjectives
                        </div>
                    </Link>
        </div>
    )
}