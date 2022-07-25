import OneGroupOfWords from "../OneGroupOfWords/OneGroupOfWords";
import { Routes, Route } from "react-router-dom";
import './main.css'
import Header from "../Header/Header";
import RusEng from "../RusEng/RusEng";
import GroupsOfWords from "../GroupsOfWords/GroupsOfWords";
import { adjectives, nouns } from "../../store/store";
import EngRus from "../EngRus/EngRus";


export default function Main(props:any){
    return (
        <div className="main">
                <Header />
                <Routes>
                    <Route path="/" element={<GroupsOfWords />} />
                    <Route path="nouns" element={<OneGroupOfWords title={'nouns'} />} />
                    <Route path="/nouns/rus-eng" element={<RusEng vocabular={nouns} lerned={props.vocabularRusEng.nouns} setLerned={props.setNounsToVocabularRusEng}/>} />
                    <Route path="/nouns/eng-rus" element={<EngRus vocabular={nouns} lerned={props.vocabularEngRus.nouns} setLerned={props.setNounsToVocabularEngRus}/>} />

                    <Route path="adjectives" element={<OneGroupOfWords title={'adjectives'}/>} />
                    <Route path="/adjectives/rus-eng" element={<RusEng vocabular={adjectives} lerned={props.vocabularRusEng.adjectives} setLerned={props.setAdjectivesToVocabularRusEng}/> } /> 
                    <Route path="/adjectives/eng-rus" element={<RusEng vocabular={adjectives} lerned={props.vocabularEngRus.adjectives} setLerned={props.setAdjectivesToVocabularEngRus}/> } /> 
                </Routes>
        </div>
    )
}