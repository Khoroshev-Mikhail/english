import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../../store/store"
import './GroupsOfWords.css'

//Дублирование кода
export default function GroupsOfWords(props: any){
    const userVocabulary = useSelector((state: RootState) => state.userVocabulary)
    const nouns = useSelector((state: RootState) => state.dictionary.filter(el => el.groups.includes('nouns')))
    const nounsRussianToEnglish = nouns.filter(el => userVocabulary.englishToRussian.includes(el.id)).length
    const nounsEnglishToRussian = nouns.filter(el => userVocabulary.russianToEnglish.includes(el.id)).length
    const nounsSpell = nouns.filter(el => userVocabulary.spell.includes(el.id)).length
    const nounsListening = nouns.filter(el => userVocabulary.listening.includes(el.id)).length


    const adjectives = useSelector((state: RootState) => state.dictionary.filter(el => el.groups.includes('adjectives')))
    const adjectivesRussianToEnglish = adjectives.filter(el => userVocabulary.englishToRussian.includes(el.id)).length
    const adjectivesEnglishToRussian = adjectives.filter(el => userVocabulary.russianToEnglish.includes(el.id)).length
    const adjectivesSpell = adjectives.filter(el => userVocabulary.spell.includes(el.id)).length
    const adjectivesListening = adjectives.filter(el => userVocabulary.listening.includes(el.id)).length
    //Добавить новую компоненту
    return (
        <div className="GroupsOfWords">
                    <Link to={'/nouns'}>
                        <div className="GroupsOfWords__oneGroupOfWord">
                            Топ-100 Существительных
                            <span><progress value={nounsRussianToEnglish} max={nouns.length}></progress>{nounsRussianToEnglish} из {nouns.length}</span>
                            <span><progress value={nounsEnglishToRussian} max={nouns.length}></progress>{nounsEnglishToRussian} из {nouns.length}</span>
                            <span><progress value={nounsSpell} max={nouns.length}></progress>{nounsSpell} из {nouns.length}</span>
                            <span><progress value={nounsListening} max={nouns.length}></progress>{nounsListening} из {nouns.length}</span>
                            </div>
                    </Link>
                    <Link to={'/adjectives'}> 
                        <div className="GroupsOfWords__oneGroupOfWord">
                            Топ-100 Прилагательных
                            <span><progress value={adjectivesRussianToEnglish} max={adjectives.length}></progress>{adjectivesRussianToEnglish} из {adjectives.length}</span>
                            <span><progress value={adjectivesEnglishToRussian} max={adjectives.length}></progress>{adjectivesEnglishToRussian} из {adjectives.length}</span>
                            <span><progress value={adjectivesSpell} max={adjectives.length}></progress>{adjectivesSpell} из {adjectives.length}</span>
                            <span><progress value={adjectivesListening} max={adjectives.length}></progress>{adjectivesListening} из {adjectives.length}</span>
                        </div>
                    </Link>
        </div>
    )
}