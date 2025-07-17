import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../reducer/patientSlice"
import doctorReducer from "../reducer/doctorSlice"
import patientAuthReducer from "../reducer/PatientAuthSlice"
import doctorAuthReducer from "../reducer/DrAuthSlice"


const appStore = configureStore({
    reducer : {
        patient : patientReducer,
        doctor : doctorReducer,
        patientAuth : patientAuthReducer,
        doctorAuth : doctorAuthReducer
    }

})

export default appStore;

