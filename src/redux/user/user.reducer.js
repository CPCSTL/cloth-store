import { userActionTypes } from "./user.types";



const INITIAL_STATE = {
    currentUser:null
};

const userReducer = (state=INITIAL_STATE, action)=> {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            }    
        default:
return state  
  }
}

export default userReducer;


// const intialState = {
//     currentUser: null
// } ;

// const userReducer = (state=intialState, action)=> {
//     switch(action.type){
//         case 'SET_CURRENT_USER':
//             return {
//                 ...state,
//                 currentUser:action.payload
//             }
//             default: 
//              return state

//     }

// }
