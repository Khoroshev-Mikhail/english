export default function RusEng(props:any){
    //Получить массив неизученных слов
    const unlerned = props.vocabular.filter((el: { id: any }) => !props.lerned.includes(el.id))
    //Рандомом выбрать из него одно слово
    const random = unlerned[Math.floor(Math.random() * unlerned.length)]
    console.log(random)
    //Русский вариант этого слова поместить в title
    


    //Английский вариант + 3 любых других английских слова из этой категории представить ввиде button с ответом
    function falseVariantsArray(arr: any, trueVariant: any){
        let uniqueSet = new Set();
        uniqueSet.add(trueVariant)
        while(uniqueSet.size < 4){
            const item = arr[Math.floor(Math.random() * arr.length)]
            uniqueSet.add(item)
        }
        return Array.from(uniqueSet)
    }
    const arr = falseVariantsArray(props.vocabular, random)
    console.log(arr)
    return (
        <div>  
            <p>{props.title}</p>
            <h1>{random.rus}</h1>
            {arr.map(el => {
                return (
                    <button 
                        onClick={() => undefined}> {/* Сравнить с правильным словом и если оно правильно засетать его id в выученные слова! А если нет тогда зарендерить страницу заново*/}
                        {el.id}
                    </button>
                    )
            })}
            
        </div>
    )
}