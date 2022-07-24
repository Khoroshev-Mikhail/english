import { connect } from "react-redux";
import { AppDispatch, RootState, setNounsToVocabular } from "../../store/store";
import GroupsOfWords from "./GroupsOfWords";

function mapStateToProps(state: RootState){
    return {
        vocabular: state.vocabular
    }
}
function mapDispatchToProps(dispatch: AppDispatch){
    return {
        setNounsVocabular: (id: number) => dispatch(setNounsToVocabular(id))
    }
}

const GroupsOfWordsWrapper = connect(mapStateToProps, mapDispatchToProps)(GroupsOfWords)
export default GroupsOfWordsWrapper