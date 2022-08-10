import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "./Components/Main/Main";
import { AppDispatch, dictionaryThunk, groupsThunk, vocabularThunk } from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(dictionaryThunk())
    dispatch(vocabularThunk(1))
    dispatch(groupsThunk())
  }, [])
  return (
    <div className="text-3xl font-bold no-underline">
      <Main />
    </div>
  );
}

export default App;
