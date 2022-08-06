import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "./Components/Main/Main";
import { AppDispatch, dictionaryThunk, vocabularThunk } from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(dictionaryThunk())
    dispatch(vocabularThunk())
  }, [])
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
