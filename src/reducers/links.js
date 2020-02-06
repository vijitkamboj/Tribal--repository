import * as actionTypes from "../actions/types"


const initialUserState ={
    links:null

}
// by defualt loading is ture 
const data_reducer = (state = initialUserState ,action) => {
    switch (action.type) {
        case actionTypes.FETCH_LINKS:
            return({
                links:action.payload.links
                
            })
        case actionTypes.REMOVE_LINKS :
            return({
                links:null
            })
        default:
            return state;
    }
}// generates states in the store according to the action 



export default data_reducer;