import { checkSpecial, malRequest } from "./global"
/**
 * get anime by id
 * @param id 
 * @param special staff,characters,episodes,news,video,pictures,statistics,moreinfo,userupdates,reviews,relations,themes,external
            
 */

export async function getByID(id:number,special?:string){
    if(special){
        special.toLowerCase()
        if(!checkSpecial(special)){
            throw new Error('special vlaue is not valid \n Acceptable special are: \n staff,characters,episodes,news,video,pictures,statistics,moreinfo,userupdates,reviews,relations,themes,external')
        }
        return (await malRequest("anime",id,special))
    }
    return (await malRequest("anime",id))
}