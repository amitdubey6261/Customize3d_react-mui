import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TransformState {
    value : number 
}

const initialState : TransformState = { // 0 //1 Rotate //2 Scale
    value :  0  
}

export const TransformSlice = createSlice({
    name : "TransformSlice" , 
    initialState , 
    reducers : {
        setTransformState : ( state , action: PayloadAction<number>) =>{
            state.value = action.payload
        }
    }
})

export const { setTransformState } = TransformSlice.actions ; 
export default TransformSlice.reducer ; 