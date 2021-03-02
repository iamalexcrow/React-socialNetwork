import React from 'react';
import {getAuthUserData} from './auth-reducer';


const INITIALISED_SUCCESS = 'INITIALISED_SUCCESS';

let initialState = { 
       initialized: false,
    }

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case INITIALISED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

            default:
                return state;
    }
}

export const initializedSuccess= (userId, email,login, isAuth) => ({ type: INITIALISED_SUCCESS, });  
export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuthUserData()); 
   debugger;
Promise.all([promise]) // если ожидаем несколько промисов, то объединем их в массив и вызываем через Promise.all 
.then(()=> {
  debugger; 
  dispatch(initializedSuccess());
});

     
}


export default appReducer;  
 