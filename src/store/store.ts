import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type Word = {id: number, eng: string, rus: string, groups: string[]}
export const dictionary: Word[] = [
    {id: 0, eng: 'air', rus: 'воздух', groups: ['nouns']},
    {id: 1, eng: 'animal', rus: 'животное', groups: ['nouns']},
    {id: 2, eng: 'answer', rus: 'ответ', groups: ['nouns']},
    {id: 10, eng: 'car', rus: 'машина', groups: ['nouns']},
    {id: 11, eng: 'child', rus: 'ребёнок', groups: ['nouns']},
    {id: 12, eng: 'children', rus: 'дети', groups: ['nouns']},
    {id: 95, eng: 'wood', rus: 'дерево', groups: ['nouns']},
    {id: 96, eng: 'word', rus: 'слово', groups: ['adjectives']},
    {id: 97, eng: 'world', rus: 'мир', groups: ['adjectives']},
    {id: 98, eng: 'year', rus: 'год', groups: ['adjectives']},
    {id: 99, eng: 'example', rus: 'пример', groups: ['adjectives']},
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
    userId: number,
    userName: string,
    russianToEnglish: number[],
    englishToRussian: number[],
    spell: number[],
    listening: number[] //Как указать пустой массив?
}
const userVocabulary = {
    russianToEnglish: [0], //Надо указать Пустой массив
    englishToRussian: [0], //Надо указать Пустой массив
    spell: [0], //Надо указать Пустой массив
    listening: [0] //Надо указать Пустой массив
}

export const vocabularThunk = createAsyncThunk(
    'vocabularThunk',
    async function(id: number){
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
    name: 'usersVocabular',
    initialState: userVocabulary,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(vocabularThunk.fulfilled, (_, action) => action.payload)
    }
})


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
    userId: number,
    login: string,
    pwd: string,
    name: string,
    phone: string,
    email: string,
}
const defaultUser: User = {
    userId: 0,
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
        const data = await response.json()
        return data
    }
)
const authorizationSlice = createSlice({
    name: 'authorizationSlice',
    initialState: defaultUser,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authorizationThunk.fulfilled, (_, action) => action.payload)
        builder.addCase(authorizationThunk.rejected, (_, action) => defaultUser)
    }

})


const myMiddleWare = (store: any) => (next: any) => (action: any) => {
    const result = next(action)
    if(action.type == 'authorizationThunk/fulfilled'){
        console.log('fullfiled', store.getState().userData)
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
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleWare),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




