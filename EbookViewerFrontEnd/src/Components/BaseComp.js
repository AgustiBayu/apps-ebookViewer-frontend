
export async function fetchData(url, headers, body) {
    try {
        const data = await fetch(url, {
            method : body ? 'POST' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                ...headers 
            },
            ...body
        })
        const res = data.json()
        return res
    } catch (e) {
        msgError(e)
    }
}

export function msgError(e) {
    console.log(e);
}