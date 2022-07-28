import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Word = {
    id: number, eng: string, rus: string, groups: string[],
}
export const dictionary: Word[] = [
    {id: 0, eng: 'air', rus: 'воздух', groups: ['nouns']},
    {id: 1, eng: 'animal', rus: 'животное', groups: ['nouns']},
    {id: 2, eng: 'answer', rus: 'ответ', groups: ['nouns']},
    {id: 3, eng: 'area', rus: 'область', groups: ['nouns']},
    {id: 4, eng: 'bird', rus: 'птица', groups: ['nouns']},
    {id: 5, eng: 'body', rus: 'тело', groups: ['nouns']},
    {id: 6, eng: 'book', rus: 'книга', groups: ['nouns']},
    {id: 7, eng: 'bottom', rus: 'низ', groups: ['nouns']},
    {id: 8, eng: 'boy', rus: 'мальчик', groups: ['nouns']},
    {id: 9, eng: 'brother', rus: 'брат', groups: ['nouns']},
    {id: 10, eng: 'car', rus: 'машина', groups: ['nouns']},
    {id: 11, eng: 'child', rus: 'ребёнок', groups: ['nouns']},
    {id: 12, eng: 'children', rus: 'дети', groups: ['nouns']},
    {id: 13, eng: 'city', rus: 'город', groups: ['nouns']},
    {id: 14, eng: 'class', rus: 'класс', groups: ['nouns']},
    {id: 15, eng: 'color', rus: 'цвет', groups: ['nouns']},
    {id: 16, eng: 'country', rus: 'страна', groups: ['nouns']},
    {id: 17, eng: 'day', rus: 'день', groups: ['nouns']},
    {id: 18, eng: 'dog', rus: 'собака', groups: ['nouns']},
    {id: 19, eng: 'door', rus: 'дверь', groups: ['nouns']},
    {id: 20, eng: 'east', rus: 'восток', groups: ['nouns']},
    {id: 21, eng: 'eye', rus: 'глаз', groups: ['nouns']},
    {id: 22, eng: 'face', rus: 'лицо', groups: ['nouns']},
    {id: 23, eng: 'family', rus: 'семья', groups: ['nouns']},
    {id: 24, eng: 'farm', rus: 'ферма', groups: ['nouns']},
    {id: 25, eng: 'father', rus: 'отец', groups: ['nouns']},
    {id: 26, eng: 'feet', rus: 'нога', groups: ['nouns']},
    {id: 27, eng: 'fire', rus: 'огонь', groups: ['nouns']},
    {id: 28, eng: 'fish', rus: 'рыба', groups: ['nouns']},
    {id: 29, eng: 'food', rus: 'еда', groups: ['nouns']},
    {id: 30, eng: 'foot', rus: 'нога', groups: ['nouns']},
    {id: 31, eng: 'friend', rus: 'друг', groups: ['nouns']},
    {id: 32, eng: 'girl', rus: 'девочка', groups: ['nouns']},
    {id: 33, eng: 'hand', rus: 'рука', groups: ['nouns']},
    {id: 34, eng: 'home', rus: 'дом', groups: ['nouns']},
    {id: 35, eng: 'head', rus: 'голова', groups: ['nouns']},
    {id: 36, eng: 'horse', rus: 'лошадь', groups: ['nouns']},
    {id: 37, eng: 'house', rus: 'жилище', groups: ['nouns']},
    {id: 38, eng: 'idea', rus: 'идея', groups: ['nouns']},
    {id: 39, eng: 'king', rus: 'король', groups: ['nouns']},
    {id: 40, eng: 'land', rus: 'суша', groups: ['nouns']},
    {id: 41, eng: 'letter', rus: 'письмо', groups: ['nouns']},
    {id: 42, eng: 'life', rus: 'жизнь', groups: ['nouns']},
    {id: 43, eng: 'line', rus: 'линия', groups: ['nouns']},
    {id: 44, eng: 'list', rus: 'список', groups: ['nouns']},
    {id: 45, eng: 'love', rus: 'любовь', groups: ['nouns']},
    {id: 46, eng: 'men', rus: 'мужчины', groups: ['nouns']},
    {id: 47, eng: 'money', rus: 'деньги', groups: ['nouns']},
    {id: 48, eng: 'month', rus: 'месяц', groups: ['nouns']},
    {id: 49, eng: 'mother', rus: 'мама', groups: ['nouns']},
    {id: 50, eng: 'mountain', rus: 'гора', groups: ['nouns']},
    {id: 51, eng: 'name', rus: 'имя', groups: ['nouns']},
    {id: 52, eng: 'night', rus: 'ночь', groups: ['nouns']},
    {id: 53, eng: 'north', rus: 'север', groups: ['nouns']},
    {id: 54, eng: 'number', rus: 'номер', groups: ['nouns']},
    {id: 55, eng: 'order', rus: 'заказ', groups: ['nouns']},
    {id: 56, eng: 'page', rus: 'страница', groups: ['nouns']},
    {id: 57, eng: 'paper', rus: 'бумага', groups: ['nouns']},
    {id: 58, eng: 'pen', rus: 'ручка', groups: ['nouns']},
    {id: 59, eng: 'people', rus: 'люди', groups: ['nouns']},
    {id: 60, eng: 'person', rus: 'человек', groups: ['nouns']},
    {id: 61, eng: 'phone', rus: 'телефон', groups: ['nouns']},
    {id: 62, eng: 'picture', rus: 'рисунок', groups: ['nouns']},
    {id: 63, eng: 'piece', rus: 'кусок', groups: ['nouns']},
    {id: 64, eng: 'place', rus: 'место', groups: ['nouns']},
    {id: 65, eng: 'plant', rus: 'растение', groups: ['nouns']},
    {id: 66, eng: 'problem', rus: 'проблема', groups: ['nouns']},
    {id: 67, eng: 'product', rus: 'продукт', groups: ['nouns']},
    {id: 68, eng: 'question', rus: 'вопрос', groups: ['nouns']},
    {id: 69, eng: 'river', rus: 'река', groups: ['nouns']},
    {id: 70, eng: 'rock', rus: 'скала', groups: ['nouns']},
    {id: 71, eng: 'room', rus: 'комната', groups: ['nouns']},
    {id: 72, eng: 'school', rus: 'школа', groups: ['nouns']},
    {id: 73, eng: 'science', rus: 'наука', groups: ['nouns']},
    {id: 74, eng: 'sea', rus: 'море', groups: ['nouns']},
    {id: 75, eng: 'sentence', rus: 'предложение', groups: ['nouns']},
    {id: 76, eng: 'ship', rus: 'корабль', groups: ['nouns']},
    {id: 77, eng: 'side', rus: 'сторона', groups: ['nouns']},
    {id: 78, eng: 'sister', rus: 'сестра', groups: ['nouns']},
    {id: 79, eng: 'song', rus: 'песня', groups: ['nouns']},
    {id: 80, eng: 'sound', rus: 'звук', groups: ['nouns']},
    {id: 81, eng: 'south', rus: 'юг', groups: ['nouns']},
    {id: 82, eng: 'space', rus: 'пространство', groups: ['nouns']},
    {id: 83, eng: 'state', rus: 'состояние', groups: ['nouns']},
    {id: 84, eng: 'story', rus: 'история', groups: ['nouns']},
    {id: 85, eng: 'thriller', rus: 'триллер', groups: ['nouns']},
    {id: 86, eng: 'top', rus: 'верх', groups: ['nouns']},
    {id: 87, eng: 'tree', rus: 'дерево', groups: ['nouns']},
    {id: 88, eng: 'watch', rus: 'часы', groups: ['nouns']},
    {id: 89, eng: 'water', rus: 'вода', groups: ['nouns']},
    {id: 90, eng: 'week', rus: 'неделя', groups: ['nouns']},
    {id: 91, eng: 'west', rus: 'запад', groups: ['nouns']},
    {id: 92, eng: 'wind', rus: 'ветер', groups: ['nouns']},
    {id: 93, eng: 'woman', rus: 'женщина', groups: ['nouns']},
    {id: 94, eng: 'women', rus: 'женщины', groups: ['nouns']},
    {id: 95, eng: 'wood', rus: 'дерево', groups: ['nouns']},
    {id: 96, eng: 'word', rus: 'слово', groups: ['adjectives']},
    {id: 97, eng: 'world', rus: 'мир', groups: ['adjectives']},
    {id: 98, eng: 'year', rus: 'год', groups: ['adjectives']},
    {id: 99, eng: 'example', rus: 'пример', groups: ['adjectives']},
]

const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState: dictionary,
    reducers: {
        setDictionary: (state: any /*: Word[] ???????????*/, action: PayloadAction<number>) => [...state, action.payload]
    }
})
export const { setDictionary } = dictionarySlice.actions



export type UsersVocabulary = {
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
export const vocabularSlice = createSlice({
    name: 'usersVocabular',
    initialState: userVocabulary,
    reducers: {
        //Правильно указать типы TS???
        setRussianToEnglish: (state: UsersVocabulary, action: PayloadAction<number>) => ({...state, russianToEnglish: [...state.russianToEnglish, action.payload]}),
        setEnglishToRussian: (state: UsersVocabulary, action: PayloadAction<number>) => ({...state, englishToRussian: [...state.englishToRussian, action.payload]}),
        setSpell: (state: UsersVocabulary, action: PayloadAction<number>) => ({...state, spell: [...state.spell, action.payload]}),
        setListening: (state: UsersVocabulary, action: PayloadAction<number>) => ({...state, listening: [...state.listening, action.payload]}),
    }
})
export const {setRussianToEnglish, setEnglishToRussian, setSpell, setListening} = vocabularSlice.actions

export const store = configureStore({
    reducer: {
        userVocabulary: vocabularSlice.reducer,
        dictionary: dictionarySlice.reducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




