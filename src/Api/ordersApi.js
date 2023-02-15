import axios from "axios";
import { baseUrl } from "./apiConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export function
    orders(url = baseUrl + 'Orders'){
        return{
            fetchAll :()=>axios.get(url)
        }
    }
    export function orderDelete(url = baseUrl + 'Orders/'){
        return{
            delete:(id)=>axios.delete(url+id,id)
        }
    }
       
