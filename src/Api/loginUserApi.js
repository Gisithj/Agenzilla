import axios from "axios";
import { baseUrl } from "./apiConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export function salesRepLogin(url = baseUrl + 'SalesRep/login'){
        return{
            create :(user)=>axios.post(url,user),
        }
    }
       
export function managerLogin(url = baseUrl + 'Managers/login'){
    return{
        create:(user)=>axios.post(url,user)
    }
}
export function adminLogin(url = baseUrl + 'Admins/login'){
    return{
        create:(user)=>axios.post(url,user)
    }
}


