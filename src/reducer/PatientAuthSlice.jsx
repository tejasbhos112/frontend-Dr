import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    email : null,
    token : null,
    error : null,
    isAuthenticated : false,
}

const PatientAuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {

        login : (state,action) => {
            state.email = action.payload;
            state.token = action.payload;
            state.isAuthenticated = true;
            state.error = null;

        },
        logout : (state, action) => {
               
            state.email = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
            
        },
    
    }
})

export const {login, logout} = PatientAuthSlice.actions;
export default PatientAuthSlice.reducer;