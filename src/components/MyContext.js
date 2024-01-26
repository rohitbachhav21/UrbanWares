import React, { createContext, useContext, useReducer } from 'react';

// Initial state for the context
const initialState = {
    formData: {
        country: "",
        name: "",
        mobile: "",
        home: '',
        area: "",
        landmark: "",
        pin: "",
        city: "",
        state: ""
    },
    purchaseHistory: [],

};

// Action types
const SET_FORM_DATA = 'SET_FORM_DATA';
//
const ADD_TO_PURCHASE_HISTORY = 'ADD_TO_PURCHASE_HISTORY'; // New action type


// Reducer function
const myReducer = (state, action) => {
    switch (action.type) {
        case SET_FORM_DATA:
            return {
                ...state,
                formData: action.payload,
            };
        case ADD_TO_PURCHASE_HISTORY: // New case for purchase history
            return {
                ...state,
                purchaseHistory: [...state.purchaseHistory, action.payload],
            };
        default:
            return state;
    }
};

// Create the context
const MyContext = createContext();


const MyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(myReducer, initialState);

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    );
};



const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
};



export { MyContextProvider, useMyContext, SET_FORM_DATA, ADD_TO_PURCHASE_HISTORY };
