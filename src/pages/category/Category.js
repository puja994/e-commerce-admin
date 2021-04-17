import React from 'react'
import { AddCategoryForm } from '../../components/add-category-form/AddCategoryForm'
import  DefaultLayout  from '../../components/layout/DefaultLayout'
import {ListGroup} from 'react-bootstrap'
import { fetchCategories } from './categoryAction'
import { ListCategory } from '../../components/list-category/ListCategory'

const Category = () => {
    return (
        <div>
           <DefaultLayout>
               <div className="dashboard">
                   <AddCategoryForm/>
                   <hr/>
                   <div className="display-categories">
                       <ListCategory />
 


                   </div>
               
               
               </div>
           </DefaultLayout>
        </div>
    )
}

export default Category;
