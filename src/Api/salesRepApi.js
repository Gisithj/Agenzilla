import axios from "axios";
import { baseUrl } from "./apiConfig";


// eslint-disable-next-line import/no-anonymous-default-export
export function
    salesRep(url = baseUrl + 'SalesRep'){
        return{
            fetchAll :()=>axios.get(url),
            create :newRecord => axios.post(url,newRecord),

        }
    }

export function salesRepDelete(url = baseUrl + 'SalesRep/'){
    return{
        delete:(id)=>axios.delete(url+id,id)
    }
}
export function topSalesRep(url = baseUrl + 'Orders/api/salesreps-top3'){
    return{
        fetchAll:(id)=>axios.get(url)
    }
}
       



