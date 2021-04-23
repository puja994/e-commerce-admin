import {createSlice} from '@reduxjs/toolkit'

const initialState={
    isLoading: false,
    status: "",
    message: "",
    deleteMsg: "",
    product: {},
    
}
const selectedProductSlice = createSlice({
    name: "editProduct",
    initialState,
    reducers:{
        requestPending: (state)=>{
            state.isLoading = true
        },

        updateProductSuccess: (state, {payload})=>{
            state.isLoading =false
            state.status = payload.status
            state.message = payload.message
        },

        fetchProductSucess: (state, {payload})=>{
            state.product = payload.result || {}
            state.isLoading =false

        },
        requestFail: (state, {payload})=>{
           state.isLoading = false

            state.status = payload.status
            state.message = payload.message
        },

        // deleteProductSuccess: (state, {payload})=>{
        //     state.isLoading =false
        //     state.status = payload.status
        //     state.deleteMsg = payload.message
        // },
   }
})

const {reducer, actions} = selectedProductSlice
export const {requestPending, 
    
    fetchProductSucess, 
    requestFail, updateProductSuccess
    
} = actions

export default reducer