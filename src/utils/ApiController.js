import axios from "axios";
import * as config from '../constant/config'
export default function callApi(endppiont,method = "GET",body){
    const url = config.url + endppiont;
    return axios({
            method : method,
            url : url,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }, 
            data : body
        }).catch(err => {
            console.log(err);
        });
}