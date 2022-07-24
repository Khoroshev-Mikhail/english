import OneGroupOfWords from "../OneGroupOfWords/OneGroupOfWords";
import { Routes, Route } from "react-router-dom";
import './main.css'
import Header from "../Header/Header";
import RusEng from "../RusEng/RusEng";
import GroupsOfWordsWrapper from "../GroupsOfWords/GroupsOfWordsWrapper";
import GroupsOfWords from "../GroupsOfWords/GroupsOfWords";
import { adjectives, nouns } from "../../store/store";


export default function Main(props:any){
    return (
        <div className="main">
                <Header />
                <Routes>
                    <Route path="/" element={<GroupsOfWords />} />
                    <Route path="nouns" element={<OneGroupOfWords title={'nouns'} />} />
                    <Route path="/nouns/rus-eng" element={<RusEng title="Слово перевод 10 nouns" vocabular={nouns} lerned={props.vocabular.nouns} setNounsToVocabular={props.setNounsToVocabular}/>} />
                    
                    <Route path="adjectives" element={<OneGroupOfWords title={'adjectives'}/>} />
                    <Route path="/adjectives/rus-eng" element={<RusEng title="Слово перевод 10 Adjectives" vocabular={adjectives} lerned={props.vocabular.adjectives} setAdjectivesToVocabular={props.setAdjectivesToVocabular}/> } /> 
                </Routes>
        </div>
    )
}