import * as actionTypes from "./types";


export const setUser = (user) => {
    return ({
        type: actionTypes.SET_USER,
        payload: {
            currentUser: user,
        }
    })
}// used to change the current user state

export const clearUser = () => {                           
    return({
        type: actionTypes.CLEAR_USER,
        payload: {
            currentUser: null,
        }
    })
} // used to clear the current user when signout

export const fetchLinks = (links) => { 
    return({
        type: actionTypes.FETCH_LINKS,
        payload: {
            links: [...links],
          
        }
    })
} 
export const removeLinks = () => {                           
    return({
        type: actionTypes.REMOVE_LINKS,
        payload: {
            links: null,
        }
    })
} 


