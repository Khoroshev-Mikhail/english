import { connect } from "react-redux";
import { AppDispatch, RootState, setNounsToVocabular } from "../../store/store";
import Main from "./Main";

function mapStateToProps(state: RootState){
    return {
        vocabular: state.vocabular
    }
}
function mapDispatchToProps(dispatch: AppDispatch){
    return {
        setNounsToVocabular: (id: number) => dispatch(setNounsToVocabular(id))
    }
}

const MainWrapper = connect(mapStateToProps, mapDispatchToProps)(Main)
export default MainWrapper