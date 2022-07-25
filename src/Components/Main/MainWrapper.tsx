import { connect } from "react-redux";
import { AppDispatch, RootState, setAdjectivesToVocabularEngRus, setAdjectivesToVocabularRusEng, setNounsToVocabularEngRus, setNounsToVocabularRusEng } from "../../store/store";
import Main from "./Main";

function mapStateToProps(state: RootState){
    return {
        vocabularRusEng: state.vocabularRusEng,
        vocabularEngRus: state.vocabularEngRus,
    }
}
function mapDispatchToProps(dispatch: AppDispatch){
    return {
        setNounsToVocabularRusEng: (id: number) => dispatch(setNounsToVocabularRusEng(id)),
        setAdjectivesToVocabularRusEng: (id: number) => dispatch(setAdjectivesToVocabularRusEng(id)),
        setNounsToVocabularEngRus: (id: number) => dispatch(setNounsToVocabularEngRus(id)),
        setAdjectivesToVocabularEngRus: (id: number) => dispatch(setAdjectivesToVocabularEngRus(id)),
    }
}

const MainWrapper = connect(mapStateToProps, mapDispatchToProps)(Main)
export default MainWrapper