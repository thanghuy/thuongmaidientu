import * as Types from '../constant/action';
export const LoginUser = (username) =>{
    return {
        type : Types.LOGIN,
        load : username
    }
} 