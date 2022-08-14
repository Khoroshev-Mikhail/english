import { useId } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../../store/store"
export default function GroupsOfWords(){
    const allGroups = useSelector((state: RootState) => state.groups)
    const userVocabulary = useSelector((state: RootState) => state.userVocabulary)
    const dictionary = useSelector((state: RootState) => state.dictionary)
    const id = useId()
    //Добавить новую компоненту    

    return (
        <div className="flex gap-5 flex-wrap justify-between sm:justify-start">
            {allGroups.map((group: any, i) => {
                const currentDictionary = dictionary.filter(el => el.groups.includes(group.eng))
                const engToRus = currentDictionary.filter(el => userVocabulary.englishToRussian.includes(el.id)).length
                const rusToEng = currentDictionary.filter(el => userVocabulary.russianToEnglish.includes(el.id)).length
                const spell = currentDictionary.filter(el => userVocabulary.spell.includes(el.id)).length
                const listening = currentDictionary.filter(el => userVocabulary.listening.includes(el.id)).length
                return (
                    <Link to={`/${group.eng}`} key={id + i} className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/6">
                        <div className="flex flex-col p-2 border-solid border-2 rounded-lg border-sky-500 justify-center">
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