import { Word } from "./store";

//Функция принимает массив текущего словаря (props.vocabular) и массив с id выученных слов (props.lern) и возвращает объект с одним не выученным словом

export function unlernedArr(vocabular: Word[], lerned: number[]):Word[] {
    return vocabular.filter(el => !lerned.includes(el.id))
}
export function randomWord(vocabular: Word[], lerned: number[]): Word{
    let unlerned = unlernedArr(vocabular, lerned)
    return unlerned[Math.floor(Math.random() * unlerned.length)]
}
//Функция возвращает массив с правильным ответом и 3мя неправильными в случайном порядке
export function falseVariants(vocabular: Word[], trueVariant: Word): Word[]{
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
//ДОПИСАТЬ ЧТОБЫ НА ВЫХОДЕ НЕ БЫЛО ТАКОГО ЖЕ ВАРИАНТА после сортировки как и пришло (такое бывает)
export function wordForSpell(word: string): string[]{
    return Object.entries(word).map(el => el.join('')).sort( ()=>Math.random() - 0.5)
}
//NodeJS - описание endpoint
//expressJS
//postgress - docker
//dataBip 
//SQL