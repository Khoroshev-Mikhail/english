import { useId } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../../store/store"
import './GroupsOfWords.css'

export default function GroupsOfWords(props: any){
    const groupsOfWords = useSelector((state: RootState) => {
        let flatState = state.dictionary.map(el => el.groups).flat()
        let setState = new Set(flatState)
        return Array.from(setState)
    })
    const userVocabulary = useSelector((state: RootState) => state.userVocabulary)
    const dictionary = useSelector((state: RootState) => state.dictionary)
    const id = useId()
    //Добавить новую компоненту
    //Не ренедерятся значения после сетанья
    return (
        <div className="GroupsOfWords">
            {groupsOfWords.map((group: string, i) => {
                const currentDictionary = dictionary.filter(el => el.groups.includes(group))
                const engToRus = currentDictionary.filter(el => userVocabulary.englishToRussian.includes(el.id)).length
                const rusToEng = currentDictionary.filter(el => userVocabulary.russianToEnglish.includes(el.id)).length
                const spell = currentDictionary.filter(el => userVocabulary.spell.includes(el.id)).length
                const listening = currentDictionary.filter(el => userVocabulary.listening.includes(el.id)).length
                return (
                    <Link to={`/${group}`} key={id + i}>
                        <div className="GroupsOfWords__oneGroupOfWord">
                            <div>{group}</div>
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