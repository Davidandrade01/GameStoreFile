
// Armazenamento de token no localStorage
// ENV.TOKEN : Como foi setado em Env como constante, sempre que o token for alterado

import { ENV } from "@/utils";
import jwtDecode from "jwt-decode";

export class Token {
    setToken(token){
        localStorage.setItem(ENV.TOKEN,token) 
    }

    getToken(){
        return localStorage.getItem(ENV.TOKEN)
    }

    removeToken(){
        localStorage.removeItem(ENV.TOKEN)
    }

    hasExpiredToken(token){
        const TokenDecode=jwtDecode(token)
        const expireDate=TokenDecode.exp *1000;
        const currentDate=new Date().getTime()

        if(currentDate>expireDate){
            return true
        }

        return false
    }
}


