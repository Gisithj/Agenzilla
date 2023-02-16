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
    export function orderPlacement(url = baseUrl + 'Orders/PlaceOrder'){
        return{
            create:(order)=>axios.post(url,order)
        }
    }
    export function deliveryCounts(url = baseUrl + 'Orders/delivery-counts'){
        return{
            fetchAll:()=>axios.get(url)
        }
    }
    export function orderCount(url = baseUrl + 'Orders/orders/count'){
        return{
            fetchAll:()=>axios.get(url)
        }
    }
    export function orderDelivered(url = baseUrl + '/Orders/'){
        return{
            create:(id)=>axios.post(url+id,id)
        }
    }
    
       
