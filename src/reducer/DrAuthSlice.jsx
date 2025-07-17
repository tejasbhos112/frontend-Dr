import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    email : null,
    token : null,
    error : null,
    isAuthenticated : false,
}

const DrAuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {

        login : (state,action) => {
            const { email, token } = action.payload;
            state.email = email;
            state.token = token;
            state.isAuthenticated = true;
            state.error = null;

        },
        logout : (state, action) => {
               
            state.email = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
            
        }
    
    }
})

export const {login, logout, addDoctor} = DrAuthSlice.actions;
export default DrAuthSlice.reducer;