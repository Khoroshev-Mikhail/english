import { useId } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../../store/store"
import './GroupsOfWords.css'

export default function GroupsOfWords(){
    const groupsOfWords = useSelector((state: RootState) => state.groups)
    const userVocabulary = useSelector((state: RootState) => state.userVocabulary)
    const dictionary = useSelector((state: RootState) => state.dictionary)
    const id = useId()
    //Добавить новую компоненту
    //Не ренедерятся значения после сетанья
    return (
        <div className="GroupsOfWords">
            {groupsOfWords.map((group: any, i) => {
                const currentDictionary = dictionary.filter(el => el.groups.includes(group.eng))
                const engToRus = currentDictionary.filter(el => userVocabulary.englishToRussian.includes(el.id)).length
                const rusToEng = currentDictionary.filter(el => userVocabulary.russianToEnglish.includes(el.id)).length
                const spell = currentDictionary.filter(el => userVocabulary.spell.includes(el.id)).length
                const listening = currentDictionary.filter(el => userVocabulary.listening.includes(el.id)).length
                return (
                    <Link to={`/${group.eng}`} key={id + i}>
                        <div className="flex flex-col m-4 p-2 border-solid border-2 rounded-lg border-sky-500 content-between">
                            <div className="text-center py-2">{group.title}</div>
                            
                            <span><progress value={engToRus} max={currentDictionary.length}></progress>{engToRus} из {currentDictionary.length}</span>
                            <span><progress value={rusToEng} max={currentDictionary.length}></progress>{rusToEng} из {currentDictionary.length}</span>
                            <span><progress value={spell} max={currentDictionary.length}></progress>{spell} из {currentDictionary.length}</span>
                            <span><progress value={listening} max={currentDictionary.length}></progress>{listening} из {currentDictionary.length}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}