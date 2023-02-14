import axios from "axios";
import { baseUrl } from "./apiConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export function userRegistration(url = baseUrl + 'Authentication/register'){
        return{
            create :(user)=>axios.post(url,user),
        }
    }
       
export function userLogin(url = baseUrl + 'Authentication/login'){
    return{
        create:(user)=>axios.post(url,user)
    }
}


