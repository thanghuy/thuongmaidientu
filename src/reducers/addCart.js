import * as types from '../constant/action';
var dataCart = JSON.parse(localStorage.getItem("cart"))
const AddCart = (state = dataCart , action) => {
    switch (action.type) {
        case types.ADDCART:
        return  dataCart = JSON.parse(localStorage.getItem("cart"));
        default : return state;
    }
}
export default AddCart;