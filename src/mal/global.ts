import fetch from 'cross-fetch';
export async function malRequest(type:string,id:number,special?:string) {
    let url =`https://api.jikan.moe/v4/`
    if(special){
        url += `${type}/${id}/${special}`
    }else{
        url += `${type}/${id}`
    }
    const options = {
        method: 'GET',
    };
    const requestData = await fetch(url, options).then((res)=>res.json()).catch(console.error);
    if (requestData.data === undefined) return null;
    return requestData.data as any;
}

export function checkSpecial(special:string){
    switch(special){
        case "staff":
            return true
        case "characters":
            return true
        case "episodes":
            return true
        case "news":
            return true
        case "video":
            return true
        case "pictures":
            return true
        case "statistics":
            return true
        case "moreinfo":
            return true
        case "userupdates":
            return true
        case "reviews":
            return true
        case "relations":
            return true
        case "themes":
            return true
        case "external":
            return true
    }
    return false
}