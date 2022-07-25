import { connect } from "react-redux";
import { AppDispatch, RootState, setAdjectivesToVocabularEngRus, setAdjectivesToVocabularRusEng, setAdjectivesToVocabularSpell, setNounsToVocabularEngRus, setNounsToVocabularRusEng, setNounsToVocabularSpell } from "../../store/store";
import Main from "./Main";

function mapStateToProps(state: RootState){
    return {
        vocabularRusEng: state.vocabularRusEng,
        vocabularEngRus: state.vocabularEngRus,
        vocabularSpell: state.vocabularSpell,
    }
}
function mapDispatchToProps(dispatch: AppDispatch){
    return {
        setNounsToVocabularRusEng: (id: number) => dispatch(setNounsToVocabularRusEng(id)),
        setAdjectivesToVocabularRusEng: (id: number) => dispatch(setAdjectivesToVocabularRusEng(id)),
        setNounsToVocabularEngRus: (id: number) => dispatch(setNounsToVocabularEngRus(id)),
        setAdjectivesToVocabularEngRus: (id: number) => dispatch(setAdjectivesToVocabularEngRus(id)),
        setNounsToVocabularSpell: (id: number) => dispatch(setNounsToVocabularSpell(id)),
        setAdjectivesToVocabularSpell: (id: number) => dispatch(setAdjectivesToVocabularSpell(id)),
    }
}

const MainWrapper = connect(mapStateToProps, mapDispatchToProps)(Main)
export default MainWrapper