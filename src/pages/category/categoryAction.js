import {saveCategory,getCategories, deleteCategories} from '../../apis/categoriAPI'
import {requestPending, addCategorySuccess, fetchAllCategorySuccess, requestFail, deleteCatsSuccess} from './categorySlice'

export const addNewCategory = frmDt => async dispatch =>{
//call api or reducer to update the state
try{
    dispatch(requestPending())
     const result = await saveCategory(frmDt)
     
    dispatch(addCategorySuccess(result))

    result.status === 'success' && dispatch(fetchCategories())
} 
catch (error){
const err = {
    status: 'error',
    message: error.message,
}
dispatch(requestFail(err))
}
}

export const fetchCategories = () => async dispatch =>{
    //call api or reducer to update the state
    try{
        dispatch(requestPending())
         const result = await getCategories()
         
        dispatch(fetchAllCategorySuccess(result))
    } 
    catch (error){
    const err = {
        status: 'error',
        message: error.message,
    }
    dispatch(requestFail(err))
    }
    }


export const removeCategories = idArg => async dispatch =>{
    //call api or reducer to update the state
    try{
        dispatch(requestPending())
         const result = await deleteCategories()
         
        dispatch(deleteCatsSuccess(result))
        result.status === 'success' && dispatch (fetchCategories())
    } 
    catch (error){
    const err = {
        status: 'error',
        message: error.message,
    }
    dispatch(requestFail(err))
    }
    }