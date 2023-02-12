import axios from "axios";
import { baseUrl } from "./apiConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    store(url = baseUrl + 'Stores'){
        return{
            fetchAll :()=>axios.get(url),
            create :(record)=>axios.post(url,record)
        }
    }
       
}


