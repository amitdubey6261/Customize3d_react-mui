import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TransformState {
    value : boolean
}

const initialState : TransformState = { 
    value :  false  
}

export const SunLightSlice = createSlice({
    name : "SunLightSlice" , 
    initialState , 
    reducers : {
        setSunLight : ( state , action: PayloadAction<boolean>) =>{
            state.value = action.payload
        }
    }
})

export const { setSunLight } = SunLightSlice.actions ; 
export default SunLightSlice.reducer ; 