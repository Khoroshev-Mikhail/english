import { Vocabular, Word } from "./store";

//Функция принимает массив текущего словаря (props.vocabular) и массив с id выученных слов (props.lern) и возвращает объект с одним не выученным словом
export function unlerned(vocabular: Vocabular, lerned: number[]): Word{
    let unlernedArr = vocabular.filter(el => !lerned.includes(el.id))
    return unlernedArr[Math.floor(Math.random() * unlernedArr.length)]
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
