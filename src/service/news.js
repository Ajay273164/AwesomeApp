import {articalCategory,articalCount,articalKey,articalUrl} from '../config/restConfig'

export async function getnews(articalCategory="general"){
    try{
        let artical = await fetch(`${articalUrl}?country=${articalCount}&category=${articalCategory}`,{
            headers:{
                "X-API-KEY" : articalKey
            }
        })
        let jsondata =  await artical.json()
        console.log("mynewprop", jsondata)
        artical = null
        return jsondata.articles
    }
    catch(error){
        console.log('error',error)
    }
}