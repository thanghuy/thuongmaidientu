import * as Types from '../constant/action';
var listUser = []
const ListUserName = (state = listUser,action) => {
    switch(action.Types){
        case Types.LOGIN : 
        state = action.ListUserName
        return [...state]
        default: return [...state]
    }
}
export default ListUserName