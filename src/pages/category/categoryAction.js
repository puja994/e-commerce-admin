import {saveCategory} from '../../apis/categoriAPI'
import {requestPending, addCategorySuccess, fetchAllCategorySuccess, requestFail} from './categorySlice'

export const addNewCategory = frmDt => async dispatch =>{
//call api or reducer to update the state
try{
    dispatch(requestPending())
     const result = await saveCategory(frmDt)
     console.log(result)
    dispatch(addCategorySuccess(result))
} 
catch (error){
const err = {
    status: 'error',
    message: error.message,
}
dispatch(requestFail(err))
}
}