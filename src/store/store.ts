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
    {id: 0, eng: 'air', rus: 'воздух'},
    {id: 1, eng: 'animal', rus: 'животное'},
    {id: 2, eng: 'answer', rus: 'ответ'},
    {id: 3, eng: 'area', rus: 'область'},
    {id: 4, eng: 'bird', rus: 'птица'},
    {id: 5, eng: 'body', rus: 'тело'},
    {id: 6, eng: 'book', rus: 'книга'},
    {id: 7, eng: 'bottom', rus: 'низ'},
    {id: 8, eng: 'boy', rus: 'мальчик'},
    {id: 9, eng: 'brother', rus: 'брат'},
    {id: 10, eng: 'car', rus: 'машина'},
    {id: 11, eng: 'child', rus: 'ребёнок'},
    {id: 12, eng: 'children', rus: 'дети'},
    {id: 13, eng: 'city', rus: 'город'},
    {id: 14, eng: 'class', rus: 'класс'},
    {id: 15, eng: 'color', rus: 'цвет'},
    {id: 16, eng: 'country', rus: 'страна'},
    {id: 17, eng: 'day', rus: 'день'},
    {id: 18, eng: 'dog', rus: 'собака'},
    {id: 19, eng: 'door', rus: 'дверь'},
    {id: 20, eng: 'east', rus: 'восток'},
    {id: 21, eng: 'eye', rus: 'глаз'},
    {id: 22, eng: 'face', rus: 'лицо'},
    {id: 23, eng: 'family', rus: 'семья'},
    {id: 24, eng: 'farm', rus: 'ферма'},
    {id: 25, eng: 'father', rus: 'отец'},
    {id: 26, eng: 'feet', rus: 'нога'},
    {id: 27, eng: 'fire', rus: 'огонь'},
    {id: 28, eng: 'fish', rus: 'рыба'},
    {id: 29, eng: 'food', rus: 'еда'},
    {id: 30, eng: 'foot', rus: 'нога'},
    {id: 31, eng: 'friend', rus: 'друг'},
    {id: 32, eng: 'girl', rus: 'девочка'},
    {id: 33, eng: 'hand', rus: 'рука'},
    {id: 34, eng: 'home', rus: 'дом'},
    {id: 35, eng: 'head', rus: 'голова'},
    {id: 36, eng: 'horse', rus: 'лошадь'},
    {id: 37, eng: 'house', rus: 'жилище'},
    {id: 38, eng: 'idea', rus: 'идея'},
    {id: 39, eng: 'king', rus: 'король'},
    {id: 40, eng: 'land', rus: 'суша'},
    {id: 41, eng: 'letter', rus: 'письмо'},
    {id: 42, eng: 'life', rus: 'жизнь'},
    {id: 43, eng: 'line', rus: 'линия'},
    {id: 44, eng: 'list', rus: 'список'},
    {id: 45, eng: 'love', rus: 'любовь'},
    {id: 46, eng: 'men', rus: 'мужчины'},
    {id: 47, eng: 'money', rus: 'деньги'},
    {id: 48, eng: 'month', rus: 'месяц'},
    {id: 49, eng: 'mother', rus: 'мама'},
    {id: 50, eng: 'mountain', rus: 'гора'},
    {id: 51, eng: 'name', rus: 'имя'},
    {id: 52, eng: 'night', rus: 'ночь'},
    {id: 53, eng: 'north', rus: 'север'},
    {id: 54, eng: 'number', rus: 'номер'},
    {id: 55, eng: 'order', rus: 'заказ'},
    {id: 56, eng: 'page', rus: 'страница'},
    {id: 57, eng: 'paper', rus: 'бумага'},
    {id: 58, eng: 'pen', rus: 'ручка'},
    {id: 59, eng: 'people', rus: 'люди'},
    {id: 60, eng: 'person', rus: 'человек'},
    {id: 61, eng: 'phone', rus: 'телефон'},
    {id: 62, eng: 'picture', rus: 'рисунок'},
    {id: 63, eng: 'piece', rus: 'кусок'},
    {id: 64, eng: 'place', rus: 'место'},
    {id: 65, eng: 'plant', rus: 'растение'},
    {id: 66, eng: 'problem', rus: 'проблема'},
    {id: 67, eng: 'product', rus: 'продукт'},
    {id: 68, eng: 'question', rus: 'вопрос'},
    {id: 69, eng: 'river', rus: 'река'},
    {id: 70, eng: 'rock', rus: 'скала'},
    {id: 71, eng: 'room', rus: 'комната'},
    {id: 72, eng: 'school', rus: 'школа'},
    {id: 73, eng: 'science', rus: 'наука'},
    {id: 74, eng: 'sea', rus: 'море'},
    {id: 75, eng: 'sentence', rus: 'предложение'},
    {id: 76, eng: 'ship', rus: 'корабль'},
    {id: 77, eng: 'side', rus: 'сторона'},
    {id: 78, eng: 'sister', rus: 'сестра'},
    {id: 79, eng: 'song', rus: 'песня'},
    {id: 80, eng: 'sound', rus: 'звук'},
    {id: 81, eng: 'south', rus: 'юг'},
    {id: 82, eng: 'space', rus: 'пространство'},
    {id: 83, eng: 'state', rus: 'состояние'},
    {id: 84, eng: 'story', rus: 'история'},
    {id: 85, eng: 'thriller', rus: 'триллер'},
    {id: 86, eng: 'top', rus: 'верх'},
    {id: 87, eng: 'tree', rus: 'дерево'},
    {id: 88, eng: 'watch', rus: 'часы'},
    {id: 89, eng: 'water', rus: 'вода'},
    {id: 90, eng: 'week', rus: 'неделя'},
    {id: 91, eng: 'west', rus: 'запад'},
    {id: 92, eng: 'wind', rus: 'ветер'},
    {id: 93, eng: 'woman', rus: 'женщина'},
    {id: 94, eng: 'women', rus: 'женщины'},
    {id: 95, eng: 'wood', rus: 'дерево'},
    {id: 96, eng: 'word', rus: 'слово'},
    {id: 97, eng: 'world', rus: 'мир'},
    {id: 98, eng: 'year', rus: 'год'},
    {id: 99, eng: 'example', rus: 'пример'},
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

export type UserVocabular = {
    nouns: number[],
    adjectives: number[]
}

//Rus-Eng
const vocabularRussian = {
    nouns: [0, 1, 2],
    adjectives: [0, 1, 2],
}
export const vocabularRussianSlice = createSlice({
    name: 'vocabularRussian',
    initialState: vocabularRussian,
    reducers: {
        setNounsToVocabularRussian: (state, action) => ({...state, nouns: [...state.nouns, action.payload]}),
        setAdjectivesToVocabularRussian: (state, action) => ({...state, adjectives: [...state.adjectives, action.payload]})
    }
})
export const {setNounsToVocabularRussian, setAdjectivesToVocabularRussian} = vocabularRussianSlice.actions

//Eng-Rus
const vocabularEnglish = {
    nouns: [0, 1, 2],
    adjectives: [0, 1, 2],
}
export const vocabularEnglishSlice = createSlice({
    name: 'vocabularEnglish',
    initialState: vocabularEnglish,
    reducers: {
        setNounsToVocabularEnglish: (state, action) => ({...state, nouns: [...state.nouns, action.payload]}),
        setAdjectivesToVocabularEnglish: (state, action) => ({...state, adjectives: [...state.adjectives, action.payload]})
    }
})
export const {setNounsToVocabularEnglish, setAdjectivesToVocabularEnglish} = vocabularEnglishSlice.actions

//Spell
const vocabularSpell = {
    nouns: [0, 1, 2],
    adjectives: [0, 1, 2],
}
export const vocabularSpellSlice = createSlice({
    name: 'vocabularSpell',
    initialState: vocabularSpell,
    reducers: {
        setNounsToVocabularSpell: (state, action) => ({...state, nouns: [...state.nouns, action.payload]}),
        setAdjectivesToVocabularSpell: (state, action) => ({...state, adjectives: [...state.adjectives, action.payload]})
    }
})
export const { setNounsToVocabularSpell, setAdjectivesToVocabularSpell } = vocabularSpellSlice.actions


export const store = configureStore({
    reducer: {
        vocabularRussian: vocabularRussianSlice.reducer,
        vocabularEnglish: vocabularEnglishSlice.reducer,
        vocabularSpell: vocabularSpellSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch