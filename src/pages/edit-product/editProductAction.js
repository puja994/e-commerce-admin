
import {requestPending, fetchProductSucess,  requestFail,updateProductSuccess  } from './selectedProductSlice'

import {getAProduct, updateProduct} from '../../apis/productAPI'

// export const addNewProduct = frmDt => async dispatch =>{
// //call api or reducer to update the state
// try{
//     dispatch(requestPending())
//      const result = await saveProduct(frmDt)
     
//     dispatch(addProductSuccess(result))

//    result.status === 'success' && dispatch(fetchProduct())
// } 
// catch (error){
// const err = {
//     status: 'error',
//     message: error.message,
// }
// dispatch(requestFail(err))
// }
// }

export const fetchAProduct = _id => async dispatch =>{
    //call api or reducer to update the state
    try{
        dispatch(requestPending())
         const result = await getAProduct(_id)
         
        dispatch(fetchProductSucess(result))
    } 
    catch (error){
    const err = {
        status: 'error',
        message: error.message,
    }
    dispatch(requestFail(err))
    }
    }

    export const updateAProduct = formDt => async dispatch =>{
        //call api or reducer to update the state
        try{
            dispatch(requestPending())
             const result =  await updateProduct(formDt)
             
            dispatch(updateProductSuccess(result))
        } 
        catch (error){
        const err = {
            status: 'error',
            message: error.message,
        }
        dispatch(requestFail(err))
        }
        }
    


