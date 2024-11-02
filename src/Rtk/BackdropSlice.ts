import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TransformState {
    value : boolean
}

const initialState : TransformState = { 
    value :  false  
}

export const BackdropSlice = createSlice({
    name : "BackdropSlice" , 
    initialState , 
    reducers : {
        setBackdropState : ( state , action: PayloadAction<boolean>) =>{
            state.value = action.payload
        }
    }
})

export const { setBackdropState } = BackdropSlice.actions ; 
export default BackdropSlice.reducer ; 