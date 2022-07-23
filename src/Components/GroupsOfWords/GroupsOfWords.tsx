import OneGroupOfWords from "../OneGroupOfWords/OneGroupOfWords";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function GroupsOfWords(){
    return (
        <>
            <h1>GroupOfWords</h1>
            <Router>
                <Link to={'/nouns'}>Nouns</Link>
                <Link to={'/Adjectives'}>Adjectives</Link>
                <Routes>
                    <Route path="/">
                        <OneGroupOfWords title={'nouns'}/>
                    </Route>
                    <Route path="/nouns">
                        <OneGroupOfWords title={'nouns'}/>
                    </Route>
                    <Route path="/adjectives">
                        <OneGroupOfWords title={'adjectives'}/>
                    </Route>
                </Routes>
            </Router>
            
        </>
    )
}