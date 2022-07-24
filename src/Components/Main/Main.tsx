import GroupsOfWords from "../GroupsOfWords/GroupsOfWords";
import OneGroupOfWords from "../OneGroupOfWords/OneGroupOfWords";
import { Routes, Route } from "react-router-dom";
import './main.css'
import Header from "../Header/Header";
import RusEng from "../RusEng/RusEng";
const user = {
    id: 1,
    name: 'Mike',
    vocabulary: {
        nouns: {
        }
    }
}
const nouns = [
    {id: 0, noun0: 'существительное0'},
    {id: 1, noun1: 'существительное1'},
    {id: 2, noun2: 'существительное2'},
    {id: 3, noun3: 'существительное3'},
    {id: 4, noun4: 'существительное4'},
    {id: 5, noun5: 'существительное5'},
    {id: 6, noun6: 'существительное6'},
    {id: 7, noun7: 'существительное7'},
    {id: 8, noun8: 'существительное8'},
    {id: 9, noun9: 'существительное9'},
]
const adjectives = [
    {id: 0, adjectives0: 'прилагательное0'},
    {id: 1, adjectives0: 'прилагательное1'},
    {id: 2, adjectives0: 'прилагательное2'},
    {id: 3, adjectives0: 'прилагательное3'},
    {id: 4, adjectives0: 'прилагательное4'},
    {id: 5, adjectives0: 'прилагательное5'},
    {id: 6, adjectives0: 'прилагательное6'},
    {id: 7, adjectives0: 'прилагательное7'},
    {id: 8, adjectives0: 'прилагательное8'},
    {id: 9, adjectives0: 'прилагательное9'},
]
export default function Main(){
    return (
        <div className="main">
                <Header />
                <Routes>
                    <Route path="/" element={<GroupsOfWords />} />
                    <Route path="nouns" element={<OneGroupOfWords title={'nouns'}/>} >
                        <Route path="rus-eng" element={<RusEng title="1"/>} />
                    </Route>
                    <Route path="adjectives" element={<OneGroupOfWords title={'adjectives'}/>} >
                        <Route path="rus-eng" element={<RusEng title="2"/>} /> 
                    </Route>
                </Routes>
        </div>
    )
}