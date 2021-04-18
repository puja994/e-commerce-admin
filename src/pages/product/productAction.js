import {saveProduct,
    getProducts, productDelete
} from '../../apis/productAPI'
import {requestPending, addProductSuccess, fetchAllProductSuccess, deleteProductSuccess, requestFail, } from './productSlice'

export const addNewProduct = frmDt => async dispatch =>{
//call api or reducer to update the state
try{
    dispatch(requestPending())
     const result = await saveProduct(frmDt)
     
    dispatch(addProductSuccess(result))

   result.status === 'success' && dispatch(fetchProducts())
} 
catch (error){
const err = {
    status: 'error',
    message: error.message,
}
dispatch(requestFail(err))
}
}

export const fetchProducts = () => async dispatch =>{
    //call api or reducer to update the state
    try{
        dispatch(requestPending())
         const result = await getProducts()
         
        dispatch(fetchAllProductSuccess(result))
    } 
    catch (error){
    const err = {
        status: 'error',
        message: error.message,
    }
    dispatch(requestFail(err))
    }
    }

    


export const deleteProduct = _id => async dispatch =>{
    //call api or reducer to update the state
    try{
        dispatch(requestPending())
         const result = await productDelete(_id)
         
        dispatch(deleteProductSuccess(result))
        result.status === 'success' && dispatch (fetchProducts())
    } 
    catch (error){
    const err = {
        status: 'error',
        message: error.message,
    }
    dispatch(requestFail(err))
    }
    }