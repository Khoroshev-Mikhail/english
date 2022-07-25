import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Word = {
    id: number,
    eng: string,
    rus: string,
}
export type Vocabular = Word[]
export const nouns: Vocabular = [
    {id: 0, eng: 'noun0', rus: 'существительное0'},
    {id: 1, eng: 'noun1', rus: 'существительное1'},
    {id: 2, eng: 'noun2', rus: 'существительное2'},
    {id: 3, eng: 'noun3', rus: 'существительное3'},
    {id: 4, eng: 'noun4', rus: 'существительное4'},
    {id: 5, eng: 'noun5', rus: 'существительное5'},
    {id: 6, eng: 'noun6', rus: 'существительное6'},
    {id: 7, eng: 'noun7', rus: 'существительное7'},
    {id: 8, eng: 'noun8', rus: 'существительное8'},
    {id: 9, eng: 'noun9', rus: 'существительное9'},
]
export const adjectives: Vocabular = [
    {id: 0, eng: 'adjective0', rus: 'прилагательное0'},
    {id: 1, eng: 'adjective1', rus: 'прилагательное1'},
    {id: 2, eng: 'adjective2', rus: 'прилагательное2'},
    {id: 3, eng: 'adjective3', rus: 'прилагательное3'},
    {id: 4, eng: 'adjective4', rus: 'прилагательное4'},
    {id: 5, eng: 'adjective5', rus: 'прилагательное5'},
    {id: 6, eng: 'adjective6', rus: 'прилагательное6'},
    {id: 7, eng: 'adjective7', rus: 'прилагательное7'},
    {id: 8, eng: 'adjective8', rus: 'прилагательное8'},
    {id: 9, eng: 'adjective9', rus: 'прилагательное9'},
]
export const user = {
    id: 1,
    name: 'Mike',
}

//Rus-Eng
const vocabularRusEng = {
    nouns: [0, 1, 2],
    adjectives: [0, 1, 2],
}
export const vocabularRusEngSlice = createSlice({
    name: 'vocabulary',
    initialState: vocabularRusEng,
    reducers: {
        setNounsToVocabularRusEng: (state, action) => ({...state, nouns: [...state.nouns, action.payload]}),
        setAdjectivesToVocabularRusEng: (state, action) => ({...state, adjectives: [...state.adjectives, action.payload]})
    }
})
export const {setNounsToVocabularRusEng, setAdjectivesToVocabularRusEng} = vocabularRusEngSlice.actions

//Eng-Rus
const vocabularEngRus = {
    nouns: [0, 1, 2],
    adjectives: [0, 1, 2],
}
export const vocabularEngRusSlice = createSlice({
    name: 'vocabulary',
    initialState: vocabularEngRus,
    reducers: {
        setNounsToVocabularEngRus: (state, action) => ({...state, nouns: [...state.nouns, action.payload]}),
        setAdjectivesToVocabularEngRus: (state, action) => ({...state, adjectives: [...state.adjectives, action.payload]})
    }
})
export const {setNounsToVocabularEngRus, setAdjectivesToVocabularEngRus} = vocabularEngRusSlice.actions


export const store = configureStore({
    reducer: {
        vocabularRusEng: vocabularRusEngSlice.reducer,
        vocabularEngRus: vocabularEngRusSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch