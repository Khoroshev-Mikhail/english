import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom' 
import { RootState } from '../../store/store'
import './oneGroupOfWords.css'
export default function OneGroupOfWords(props: any){
    const dictionary = useSelector((state: RootState) => state.dictionary)
    const userVocabulary = useSelector((state: RootState) => state.userVocabulary)

    const currentDictionary = dictionary.filter(el => el.groups.includes(props.eng))

    const total = currentDictionary.length
    const engToRus = currentDictionary.filter(el => userVocabulary.englishToRussian.includes(el.id)).length
    const rusToEng = currentDictionary.filter(el => userVocabulary.russianToEnglish.includes(el.id)).length
    const spell = currentDictionary.filter(el => userVocabulary.spell.includes(el.id)).length
    const listening = currentDictionary.filter(el => userVocabulary.listening.includes(el.id)).length
    return (
        <div className="flex flex-col w-full">
            <div className='w-auto flex flex-col gap-2 text-center' >
                <h1  className=''>{props.title}</h1>
                <Link to="eng-rus" className=''><button className='w-64 border-2 rounded border-sky-500 '>Английский - Русский {engToRus} / {total} </button></Link>
                <Link to="rus-eng" className=''><button className='w-64 border-2 rounded border-sky-500 '>Русский Английский {rusToEng} / {total}</button></Link>
                <Link to="spell" className=''><button className='w-64 border-2 rounded border-sky-500 '>Собери слово из букв {spell} / {total}</button></Link>
                <Link to="listening" className=''><button className='w-64 border-2 rounded border-sky-500 '>Аудирование {listening} / {total}</button></Link>
            </div>
        </div>
    )
}