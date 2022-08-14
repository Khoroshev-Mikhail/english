export async function authorization(id: number, pwd: string){
    return await fetch('http://localhost:3001/dictionary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({id, pwd})
    })
}
export function setVocabulary(userId: number | null, pwd: string, method: string, idWord: number){
    return fetch('http://localhost:3001/setVocabulary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({userId, pwd, method, idWord})
    })
}
