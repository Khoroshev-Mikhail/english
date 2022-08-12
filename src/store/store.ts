import { configureStore, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Word = {id: number, eng: string, rus: string, groups: string[]}
export const dictionary: Word[] = [
    {id: 0, eng: 'air', rus: 'воздух', groups: ['nouns']},
]
export const dictionaryThunk = createAsyncThunk(
    'dictionaryThunk',
    async function() {
        const response = await fetch('http://localhost:3001/dictionary', {
            method: 'POST'
        })
        const data: Word[] = await response.json()
        return data.sort((a: Word, b: Word) => a.eng.localeCompare(b.eng))
    }
)
const dictionarySlice = createSlice({
    name: 'dictionarySlice',
    initialState: dictionary,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(dictionaryThunk.fulfilled, (_, action) => action.payload)
    }
})

export type UsersVocabulary = {
    russianToEnglish: number[],
    englishToRussian: number[],
    spell: number[],
    listening: number[],
}
const initialUserVocabulary: UsersVocabulary = {
    russianToEnglish: [],
    englishToRussian: [],
    spell: [],
    listening: []
}

export const vocabularThunk = createAsyncThunk(
    'vocabularThunk',
    async function(id: number | null){
        const response = await fetch('http://localhost:3001/vocabulary', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({id})
        })
        const data = await response.json()
        const filtredData = {
            russianToEnglish: data.russianToEnglish,
            englishToRussian: data.englishToRussian,
            spell: data.spell,
            listening: data.listening
        }
        return filtredData
    }
)
export const vocabularSlice = createSlice({
    name: 'userVocabulary',
    initialState: initialUserVocabulary,
    reducers: {
        clearVocabular: () => initialUserVocabulary,
        setTotalVocabulary: (_, action) => action.payload,
        setEnglishToRussian: (state: UsersVocabulary, action: PayloadAction<number>) => ({...state, englishToRussian: [...state.englishToRussian, action.payload]}),
        setRussianToEnglish: (state: UsersVocabulary, action: PayloadAction<number>) => ({...state, russianToEnglish: [...state.russianToEnglish, action.payload]}),
        setSpell: (state: UsersVocabulary, action: PayloadAction<number>) => ({...state, spell: [...state.spell, action.payload]}),
        setListening: (state: UsersVocabulary, action: PayloadAction<number>) => ({...state, listening: [...state.listening, action.payload]}),
    },
    extraReducers: (builder) => {
        builder.addCase(vocabularThunk.fulfilled, (_, action) => action.payload)
        builder.addCase(vocabularThunk.rejected, () => initialUserVocabulary)
    }
})
export const {clearVocabular, setTotalVocabulary, setEnglishToRussian, setRussianToEnglish, setSpell, setListening} = vocabularSlice.actions

export type Group = {id: number, eng: string, title: string}
const groups: Group[] = [{id: 0, eng: 'nouns', title: 'Топ-100 существительных'}]
export const groupsThunk = createAsyncThunk(
    'groups',
    async function(){
        const response = await fetch('http://localhost:3001/groups', {
            method: 'POST'
        })
        const data: Group[] = await response.json()
        return data.sort((a: Group, b: Group) => a.id - b.id)
    }
)
export const groupsSlice = createSlice({
    name: 'groupsSlice',
    initialState: groups,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(groupsThunk.fulfilled, (_, action) => action.payload)
    }
})

export type User = {
    userId: number | null,
    login: string,
    pwd: string,
    name: string,
    phone: string,
    email: string,
}
const initialUser: User = {
    userId: null,
    login: 'unknown',
    pwd: '',
    name: 'unknown user',
    phone: 'unknown',
    email: 'unknown'
}
//Добавить логику: Если неавторизированный пользователь изучал слова, а потом авторизировался то надо засетать изученный стейт в словарь пользователя
export const authorizationThunk = createAsyncThunk(
    'authorizationThunk',
    async function (obj: {login: string, pwd: string}){ //Не указывается тип пароля
        const response = await fetch('http://localhost:3001/authorization', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({login: obj.login, pwd: obj.pwd})
        })
        const data: User = await response.json()
        return data
    }
)
const authorizationSlice = createSlice({
    name: 'authorizationSlice',
    initialState: initialUser,
    reducers: {
        clearAuthorization: () => initialUser,
        authorizationAction: (_, action) => action.payload
    },
    extraReducers: (builder) => {
        builder.addCase(authorizationThunk.fulfilled, (_, action) => action.payload)
        builder.addCase(authorizationThunk.rejected, () => initialUser)
    }
})
export const { clearAuthorization, authorizationAction } = authorizationSlice.actions

const localStorageMW = (store: any) => (next: any) => (action: any) => {
    //console.log(store.getState().userData)
    //console.log(action.type)
    const result = next(action)
    if(action.type == 'authorizationThunk/fulfilled'){
        const localUserData = JSON.stringify(store.getState().userData)
        localStorage.setItem('localUserData', localUserData)
    } 
    if(action.type == 'authorizationThunk/rejected'){
        localStorage.clear()
    }
    return result
}

export const store = configureStore({
    reducer: {
        userVocabulary: vocabularSlice.reducer,
        dictionary: dictionarySlice.reducer,
        groups: groupsSlice.reducer,
        userData: authorizationSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMW),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




