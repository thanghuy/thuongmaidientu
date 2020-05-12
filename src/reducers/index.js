import { combineReducers} from "redux";
import status from './SignUp';
import AddCart from './addCart';
const appReducers = combineReducers({
    status : status,
    dataUser : status,
    dataCart :AddCart
});
export default appReducers;