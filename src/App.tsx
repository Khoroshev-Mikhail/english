import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import Main from "./Components/Main/Main";
import { AppDispatch, dictionaryThunk, groupsThunk, RootState, vocabularThunk } from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const userId = useSelector((state: RootState) => state.userData.userId)
  useEffect(()=>{
    dispatch(dictionaryThunk())
    dispatch(groupsThunk())
  }, [])
  useEffect(()=>{
    dispatch(vocabularThunk(userId))
}, [userId])


  return (
    <div className="container mx-auto px-4 text-sm font-sans">
      <Main />
    </div>
  );
}

export default App;
