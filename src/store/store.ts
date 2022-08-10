import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type Word = {id: number, eng: string, rus: string, groups: string[]}
//Хранить здесь json файлы с initial dictionary и перезаписывать их каждый раз после обновления dictionary
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
        builder.addCase(dictionaryThunk.fulfilled, (state: Word[], action) => action.payload)
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
    russianToEnglish: [ 1, 2, 3, 4, 5],
    englishToRussian: [ 1, 2, 3, 4, 5],
    spell: [ 1, 2, 3, 4, 5],
    listening: [1, 2]
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
        builder.addCase(vocabularThunk.fulfilled, (state, action) => action.payload)
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
        builder.addCase(groupsThunk.fulfilled, (state, action) => action.payload)
    }
})

//Написать авторизацию
const authorizationThunk = createAsyncThunk(
    'authorizationThunk',
    async function(login, password){
        const response = await fetch('http://localhost:3001/authorization', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({login, password})
        })
    }
)


export const store = configureStore({
    reducer: {
        userVocabulary: vocabularSlice.reducer,
        dictionary: dictionarySlice.reducer,
        groups: groupsSlice.reducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




