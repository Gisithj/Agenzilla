import axios from "axios";
import { baseUrl } from "./apiConfig";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    item(url = baseUrl + 'Item'){
        return{
            fetchAll :()=>axios.get(url),
            create :newRecord => axios.post(url,newRecord),

        }
    }
       
}


