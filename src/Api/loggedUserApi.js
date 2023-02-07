import axios from "axios";
import { baseUrl } from "./apiConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    orders(url = baseUrl + 'Orders'){
        return{
            fetchAll :()=>axios.get(url)
        }
    }
       
}