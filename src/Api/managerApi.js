import axios from "axios";
import { baseUrl } from "./apiConfig";

export function manager(url = baseUrl + 'Managers'){
        return{
            fetchAll :()=>axios.get(url)
        }
    }

export function managerDelete(url = baseUrl + 'Managers/'){
    return{
        delete:(id)=>axios.delete(url+id,id)
    }
}
       



