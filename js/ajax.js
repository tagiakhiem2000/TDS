import { methods } from "./constants.js";
import { encodeQueryUrl } from "./helper.js";

export async function ajaxRequest(method,url,data=null,header=null) {
    return new Promise(function(resolve,reject){
        const request=new XMLHttpRequest();
        request.onload=()=> {
            if (request.status===200){
                resolve(JSON.parse(request.responseText))
            }
            else {
                reject('Error');
            }
        }
        console.log(data, encodeQueryUrl(data), method);

        request.open(method,method===methods.get ? `${url}?${encodeQueryUrl(data)}`:url,true);
        if (header) {
            for (let key in header) {
                request.setRequestHeader(key,header[key]);
            }
        }
        if (method===methods.get) {
            request.send();
        }
        else {
            request.send(encodeQueryUrl(data));
        }
    })
}