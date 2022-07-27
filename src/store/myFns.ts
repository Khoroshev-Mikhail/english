import { Vocabular, Word, Words } from "./store";

//Функция принимает массив текущего словаря (props.vocabular) и массив с id выученных слов (props.lern) и возвращает объект с одним не выученным словом
export function unlerned(vocabular: Vocabular, lerned: number[]): Word{
    let unlernedArr = vocabular.filter(el => !lerned.includes(el.id))
    return unlernedArr[Math.floor(Math.random() * unlernedArr.length)]
}
export function unlernedArr(vocabular: Words[], lerned: number[]):Words[] {
    return vocabular.filter(el => !lerned.includes(el.id))
}
export function randomWord(vocabular: Words[], lerned: number[]): Words{
    let unlerned = unlernedArr(vocabular, lerned)
    return unlerned[Math.floor(Math.random() * unlerned.length)]
}
//Функция возвращает массив с правильным ответом и 3мя неправильными в случайном порядке
export function falseVariants(vocabular: Words[], trueVariant: Words): Words[]{
    let uniqueSet: Set<Words> = new Set();
    uniqueSet.add(trueVariant)
    while(uniqueSet.size < 4){
        const item = vocabular[Math.floor(Math.random() * vocabular.length)]
        uniqueSet.add(item)
    }
    return Array.from(uniqueSet).sort(() => Math.random() - 0.5)
}
//Функция возвращает массив с правильным ответом и 3мя неправильными в случайном порядке
export function falseVariantsArray(vocabular: Vocabular, trueVariant: Word): Vocabular{
    let uniqueSet: Set<Word> = new Set();
    uniqueSet.add(trueVariant)
    while(uniqueSet.size < 4){
        const item = vocabular[Math.floor(Math.random() * vocabular.length)]
        uniqueSet.add(item)
    }
    return Array.from(uniqueSet).sort(() => Math.random() - 0.5)
}

//Функция примнимает строку str и возвращает массив [0s, 1t, 2r]
//Используется при изучении слова по буквам
export function wordForSpell(word: string): string[]{
    return Object.entries(word).map(el => el.join('')).sort( ()=>Math.random() - 0.5)
}
//NodeJS - описание endpoint
//expressJS
//postgress - docker
//dataBip 
//SQL