import OneGroupOfWords from "../OneGroupOfWords/OneGroupOfWords";
import { Routes, Route } from "react-router-dom";
import './main.css'
import Header from "../Header/Header";
import RusEng from "../RusEng/RusEng";
import GroupsOfWords from "../GroupsOfWords/GroupsOfWords";
import { adjectives, nouns } from "../../store/store";
import EngRus from "../EngRus/EngRus";
import Spell from "../Spell/Spell";


export default function Main(props:any){
    return (
        <div className="main">
                <Header />
                <Routes>
                    <Route path="/" element={<GroupsOfWords />} />
                    <Route path="nouns" element={<OneGroupOfWords title={'nouns'} />} />
                    <Route path="/nouns/rus-eng" element={<RusEng vocabular={nouns} lerned={props.vocabularRusEng.nouns} setLerned={props.setNounsToVocabularRusEng}/>} />
                    <Route path="/nouns/eng-rus" element={<EngRus vocabular={nouns} lerned={props.vocabularEngRus.nouns} setLerned={props.setNounsToVocabularEngRus}/>} />
                    <Route path="/nouns/spell" element={<Spell vocabular={nouns} lerned={props.vocabularSpell.nouns} setLerned={props.setNounsToVocabularSpell}/>} />

                    <Route path="adjectives" element={<OneGroupOfWords title={'adjectives'}/>} />
                    <Route path="/adjectives/rus-eng" element={<RusEng vocabular={adjectives} lerned={props.vocabularRusEng.adjectives} setLerned={props.setAdjectivesToVocabularRusEng}/> } /> 
                    <Route path="/adjectives/eng-rus" element={<RusEng vocabular={adjectives} lerned={props.vocabularEngRus.adjectives} setLerned={props.setAdjectivesToVocabularEngRus}/> } /> 
                    <Route path="/nouns/spell" element={<Spell vocabular={adjectives} lerned={props.vocabularSpell.adjectives} setLerned={props.setAdjectivesToVocabularSpell}/>} />
                </Routes>
        </div>
    )
}