import React from 'react'
import { useHistory } from "react-router-dom"
import  DefaultLayout  from '../../components/layout/DefaultLayout'
import {Button} from 'react-bootstrap'
import {ProductListTable} from '../../components/product-table/ProductListTable'

const Product = () => {
    const history = useHistory()
    return (
        <div>
           <DefaultLayout>
               
               product
               <div className="product">
                   <h1>Products</h1>
                   <Button variant="success"
                   onClick= {()=>history.push("/product/new")}
                   
                   >Add new product</Button>
                   <div className="product-lists">
                       <ProductListTable />
                   </div>
               </div>

           </DefaultLayout>
        </div>
    )
}

export default Product;
