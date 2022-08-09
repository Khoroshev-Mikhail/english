import OneGroupOfWords from "../OneGroupOfWords/OneGroupOfWords";
import { Routes, Route } from "react-router-dom";
import './main.css'
import Header from "../Header/Header";
import GroupsOfWords from "../GroupsOfWords/GroupsOfWords";
import RussianToEnglish from "../RusEng/RussianToEnglish";
import EnglishToRussian from "../EngRus/EnglishToRussian";
import Spell from "../Spell/Spell";
import Listening from "../Listening/Listening";
import Admin from "../Admin/Admin";
import AddNewWord from "../Admin/AddNewWord/AddNewWord";
import ChangeWord from "../Admin/ChangeWord/ChangeWord";
import AddNewGroup from "../Admin/AddNewGroup/AddNewGroup";
import ChangeGroup from "../Admin/ChangeGroup/ChangeGroup";


export default function Main(){
    return (
        <div className="container mx-auto px-4 text-base font-sans">
                <Header />
                <Routes>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/addNewWord" element={<AddNewWord />} />
                    <Route path="/changeWord" element={<ChangeWord />} />
                    <Route path="/addNewGroup" element={<AddNewGroup />} />
                    <Route path="/changeGroup" element={<ChangeGroup />} />

                    <Route path="/" element={<GroupsOfWords/>} />
                    <Route path="nouns" element={<OneGroupOfWords title={'Топ-100 существительных'} />} />
                    <Route path="adjectives" element={<OneGroupOfWords title={'Топ-100 прилагательных'} />} />
                    
                    <Route path="nouns/eng-rus" element={<EnglishToRussian group={'nouns'} />} />
                    <Route path="nouns/rus-eng" element={<RussianToEnglish group={'nouns'} />} />
                    <Route path="nouns/spell" element={<Spell group={'nouns'} />} />
                    <Route path="nouns/listening" element={<Listening group={'nouns'} />} />

                    <Route path="adjectives/eng-rus" element={<EnglishToRussian group={'adjectives'} />} />
                    <Route path="adjectives/rus-eng" element={<RussianToEnglish group={'adjectives'} />} />
                    <Route path="adjectives/spell" element={<Spell group={'adjectives'} />} />
                    <Route path="adjectives/listening" element={<Listening group={'adjectives'} />} />
                </Routes>
        </div>
    )
}