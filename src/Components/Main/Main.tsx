import OneGroupOfWords from "../OneGroupOfWords/OneGroupOfWords";
import { Routes, Route } from "react-router-dom";
import './main.css'
import Header from "../Header/Header";
import GroupsOfWords from "../GroupsOfWords/GroupsOfWords";
import RussianToEnglish from "../RusEng/RussianToEnglish";
import EnglishToRussian from "../EngRus/EnglishToRussian";
import Spell from "../Spell/Spell";


export default function Main(){
    return (
        <div className="main">
                <Header />
                <Routes>
                    <Route path="/" element={<GroupsOfWords/>} />
                    <Route path="nouns" element={<OneGroupOfWords title={'Топ-100 существительных'} />} />
                    <Route path="adjectives" element={<OneGroupOfWords title={'Топ-100 прилагательных'} />} />
                    
                    <Route path="nouns/eng-rus" element={<EnglishToRussian group={'nouns'} />} />
                    <Route path="nouns/rus-eng" element={<RussianToEnglish group={'nouns'} />} />
                    <Route path="nouns/spell" element={<Spell group={'nouns'} />} />

                    <Route path="adjectives/eng-rus" element={<EnglishToRussian group={'adjectives'} />} />
                    <Route path="adjectives/rus-eng" element={<RussianToEnglish group={'adjectives'} />} />
                    <Route path="adjectives/spell" element={<Spell group={'adjectives'} />} />
                </Routes>
        </div>
    )
}