import { connect } from "react-redux";
import { AppDispatch, RootState, setAdjectivesToVocabularEnglish, setAdjectivesToVocabularRussian, setAdjectivesToVocabularSpell, setNounsToVocabularEnglish, setNounsToVocabularRussian, setNounsToVocabularSpell } from "../../store/store";
import Main from "./Main";

function mapStateToProps(state: RootState){
    return {
        vocabularRussian: state.vocabularRussian,
        vocabularEnglish: state.vocabularEnglish,
        vocabularSpell: state.vocabularSpell,
    }
}
//Дублирование кода
function mapDispatchToProps(dispatch: AppDispatch){
    return {
        setNounsToVocabularRussian: (id: number) => dispatch(setNounsToVocabularRussian(id)),
        setAdjectivesToVocabularRussian: (id: number) => dispatch(setAdjectivesToVocabularRussian(id)),
        setNounsToVocabularEnglish: (id: number) => dispatch(setNounsToVocabularEnglish(id)),
        setAdjectivesToVocabularEnglish: (id: number) => dispatch(setAdjectivesToVocabularEnglish(id)),
        setNounsToVocabularSpell: (id: number) => dispatch(setNounsToVocabularSpell(id)),
        setAdjectivesToVocabularSpell: (id: number) => dispatch(setAdjectivesToVocabularSpell(id)),
    }
}

const MainWrapper = connect(mapStateToProps, mapDispatchToProps)(Main)
export default MainWrapper