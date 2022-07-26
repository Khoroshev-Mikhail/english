import OneGroupOfWords from "../OneGroupOfWords/OneGroupOfWords";
import { Routes, Route } from "react-router-dom";
import './main.css'
import Header from "../Header/Header";
import RusEng from "../RusEng/RusEng";
import GroupsOfWords from "../GroupsOfWords/GroupsOfWords";
import { adjectives, nouns, Vocabular } from "../../store/store";
import EngRus from "../EngRus/EngRus";
import Spell from "../Spell/Spell";


export type PropsForLerning = {
    lerned: number[],
    vocabular: Vocabular,
    setLerned: (id: number) => void,
}

export default function Main(props:any){
    return (
        <div className="main">
                <Header />
                <Routes>
                    <Route path="/" element={<GroupsOfWords russian={props.vocabularRussian} english={props.vocabularEnglish} spell={props.vocabularRussian}/>} />
                    <Route path="nouns" element={<OneGroupOfWords title={'Топ-100 существительных'} russian={props.vocabularRussian.nouns} english={props.vocabularEnglish.nouns} spell={props.vocabularSpell.nouns} max={nouns.length}/>} />
                    <Route path="/nouns/rus-eng" element={<RusEng vocabular={nouns} lerned={props.vocabularRussian.nouns} setLerned={props.setNounsToVocabularRussian}/>} />
                    <Route path="/nouns/eng-rus" element={<EngRus vocabular={nouns} lerned={props.vocabularEnglish.nouns} setLerned={props.setNounsToVocabularEnglish}/>} />
                    <Route path="/nouns/spell" element={<Spell vocabular={nouns} lerned={props.vocabularSpell.nouns} setLerned={props.setNounsToVocabularSpell}/>} />

                    <Route path="adjectives" element={<OneGroupOfWords title={'Топ-100 прилагательных'} russian={props.vocabularRussian.adjectives} english={props.vocabularEnglish.adjectives} spell={props.vocabularRussian.adjectives} max={adjectives.length}/>} />
                    <Route path="/adjectives/rus-eng" element={<RusEng vocabular={adjectives} lerned={props.vocabularRussian.adjectives} setLerned={props.setAdjectivesToVocabularRussian}/> } /> 
                    <Route path="/adjectives/eng-rus" element={<RusEng vocabular={adjectives} lerned={props.vocabularEnglish.adjectives} setLerned={props.setAdjectivesToVocabularEnglish}/> } /> 
                    <Route path="/nouns/spell" element={<Spell vocabular={adjectives} lerned={props.vocabularSpell.adjectives} setLerned={props.setAdjectivesToVocabularSpell}/>} />
                </Routes>
        </div>
    )
}