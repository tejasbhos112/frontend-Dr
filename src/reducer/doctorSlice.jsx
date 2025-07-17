import { createSlice } from "@reduxjs/toolkit";


const doctorSlice = createSlice({
    name : "doctor",
    initialState : null,
    reducers : {

        addDoctor : (state,action) =>
        {
            return action.payload
        },
        removeDoctor : (state,action) => {
           return null
        },
       

}})

export const {addDoctor, removeDoctor} = doctorSlice.actions
export default doctorSlice.reducer;
