import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const nouns = [
    {id: 0, noun0: 'существительное0'},
    {id: 1, noun1: 'существительное1'},
    {id: 2, noun2: 'существительное2'},
    {id: 3, noun3: 'существительное3'},
    {id: 4, noun4: 'существительное4'},
    {id: 5, noun5: 'существительное5'},
    {id: 6, noun6: 'существительное6'},
    {id: 7, noun7: 'существительное7'},
    {id: 8, noun8: 'существительное8'},
    {id: 9, noun9: 'существительное9'},
]
export const adjectives = [
    {id: 0, adjectives0: 'прилагательное0'},
    {id: 1, adjectives0: 'прилагательное1'},
    {id: 2, adjectives0: 'прилагательное2'},
    {id: 3, adjectives0: 'прилагательное3'},
    {id: 4, adjectives0: 'прилагательное4'},
    {id: 5, adjectives0: 'прилагательное5'},
    {id: 6, adjectives0: 'прилагательное6'},
    {id: 7, adjectives0: 'прилагательное7'},
    {id: 8, adjectives0: 'прилагательное8'},
    {id: 9, adjectives0: 'прилагательное9'},
]

export const user = {
    id: 1,
    name: 'Mike',
}
const vocabular = {
    nouns: [0, 1, 2], //(id выученных слов) Надо уточнить формат данных в БД
    adjectives: [0, 1, 2]
}

export const vocabularSlice = createSlice({
    name: 'vocabulary',
    initialState: vocabular,
    reducers: {
        setNounsToVocabular: (state, action) => ({...state, nouns: [...state.nouns, action.payload.id]})
    }
})
export const store = configureStore({
    reducer: {}
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch