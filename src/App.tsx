import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import Main from "./Components/Main/Main";
import { AppDispatch, authorizationAction, dictionaryThunk, groupsThunk, RootState, setTotalVocabulary, vocabularThunk } from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const userId = useSelector((state: RootState) => state.userData.userId)
  const localUserId = localStorage.getItem('userId')
  useEffect(()=>{
    dispatch(dictionaryThunk())
    dispatch(groupsThunk())
    const localUserData = localStorage.getItem('localUserData')
    if(localUserData){
      dispatch(authorizationAction(JSON.parse(localUserData)))
    }
    const localUserVocabulary = localStorage.getItem('localUserVocabulary')
    if(localUserVocabulary){
      console.log(localUserVocabulary)
      //dispatch(setTotalVocabulary(JSON.parse(localUserVocabulary)))
    }
  }, [])
  useEffect(()=>{
    if(userId){
      //Добавить проверку по pwd
      dispatch(vocabularThunk(userId))
    }
}, [userId])


  return (
    <div className="container mx-auto px-4 text-sm font-sans">
      <Main />
    </div>
  );
}

export default App;
