import axios from "axios";
import { baseUrl } from "./apiConfig";


// eslint-disable-next-line import/no-anonymous-default-export
export function 
    item(url = baseUrl + 'Items'){
        return{
            fetchAll :()=>axios.get(url),
            create :newRecord => axios.post(url,newRecord),
            

        }
    }
    
       

export function mostItems(url = baseUrl + 'Items/MostItem'){
    return{
        fetchAll :()=>axios.get(url)
        

    }
}

export function leastItems(url = baseUrl + 'Items/LeastItem'){
    return{
        fetchAll :()=>axios.get(url)
        

    }
}


