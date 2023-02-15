import axios from "axios";
import { baseUrl } from "./apiConfig";

export function salesRepRegistration(url = baseUrl + 'SalesRep/register'){
        return{
            create :(user)=>axios.post(url,user),
        }
    }
       
export function managerRegistration(url = baseUrl + 'Managers/register'){
    return{
        create:(user)=>axios.post(url,user)
    }
}


