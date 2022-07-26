import { Link } from "react-router-dom"
import './GroupsOfWords.css'
import { nouns, adjectives, UserVocabular } from "../../store/store"
type GroupsOfWordsProps = {
    russian: UserVocabular,
    english: UserVocabular,
    spell: UserVocabular,
}
//Дублирование кода
export default function GroupsOfWords(props: GroupsOfWordsProps){
    return (
        <div className="GroupsOfWords">
                    <Link to={'/nouns'}>
                        <div className="GroupsOfWords__oneGroupOfWord">
                            Топ-100 Существительных
                            <span><progress value={props.russian.nouns.length} max={nouns.length}></progress> {Math.round(props.russian.nouns.length / nouns.length * 100)}%</span>
                            <span><progress value={props.english.nouns.length} max={nouns.length}></progress> {Math.round(props.english.nouns.length / nouns.length * 100)}%</span>
                            <span><progress value={props.spell.nouns.length} max={nouns.length}></progress> {Math.round(props.spell.nouns.length / nouns.length * 100)}%</span>
                        </div>
                    </Link>
                    <Link to={'/adjectives'}> 
                        <div className="GroupsOfWords__oneGroupOfWord">
                            Топ-100 Прилагательных
                            <span><progress value={props.russian.adjectives.length} max={adjectives.length}></progress> {Math.round(props.russian.adjectives.length / adjectives.length * 100)}%</span>
                            <span><progress value={props.english.adjectives.length} max={adjectives.length}></progress> {Math.round(props.english.adjectives.length / adjectives.length * 100)}%</span>
                            <span><progress value={props.spell.adjectives.length} max={adjectives.length}></progress> {Math.round(props.spell.adjectives.length / adjectives.length * 100)}%</span>
                        </div>
                    </Link>
        </div>
    )
}