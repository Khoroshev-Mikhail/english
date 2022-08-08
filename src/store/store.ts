import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export type Word = {
    id: number, eng: string, rus: string, groups: string[],
}
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
    async function() /*: Word[] ??????*/{
        const response = await fetch('http://localhost:3001/dictionary')
        const data: Word[] = await response.json()
        return data
    }
)
const dictionarySlice = createSlice({
    name: 'dictionarySlice',
    initialState: dictionary,
    reducers: {
        setDictionary: (state: any /*: Word[] ???????????*/, action: PayloadAction<number>) => [...state, action.payload]
    },
    extraReducers: (builder) => {

        builder.addCase(dictionaryThunk.fulfilled, (state, action) => action.payload)
        //builder.addCase(dictionaryThunk.rejected, (state, action) => dictionary) //что указать в ошибке?
    }
})
export const { setDictionary } = dictionarySlice.actions

export type UsersVocabulary = {
    userId: number,
    userName: string,
    russianToEnglish: number[],
    englishToRussian: number[],
    spell: number[],
    listening: number[] //Как указать пустой массив?
}
const userVocabulary = {
    userId: 1, //удалить потом
    userName: 'Mike', //удалить потом
    russianToEnglish: [ 1, 2, 3, 4, 5],
    englishToRussian: [ 1, 2, 3, 4, 5],
    spell: [ 1, 2, 3, 4, 5],
    listening: [1, 2]
}

export const vocabularThunk = createAsyncThunk(
    'vocabularThunk',
    async function(){
        const response = await fetch('http://localhost:3001/vocabulary')
        const data = await response.json() //очистить от userId и др
        return data
    }
)
export const vocabularSlice = createSlice({
    name: 'usersVocabular',
    initialState: userVocabulary,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(vocabularThunk.fulfilled, (state, action) => action.payload)
    }
})

export const groupsThunk = createAsyncThunk(
    'groups',
    async function(){
        const response = await fetch('http://localhost:3001/groups')
        const data = response.json()
        return data
    }
)
export const groupsSlice = createSlice({
    name: 'groupsSlice',
    initialState: [],
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(groupsThunk.fulfilled, (state, action) => action.payload)
    }
})




export const store = configureStore({
    reducer: {
        userVocabulary: vocabularSlice.reducer,
        dictionary: dictionarySlice.reducer,
        groups: groupsSlice.reducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




