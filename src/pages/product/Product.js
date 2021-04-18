import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom"
import  DefaultLayout  from '../../components/layout/DefaultLayout'
import {Button, Spinner, Alert} from 'react-bootstrap'
import ProductListTable from '../../components/product-table/ProductListTable'
//import {fetchProduct} from './productAction'

const Product = () => {
    const history = useHistory()
    // const 

    // useEffect(() => {
        
    //     }
    // }, [input])
    return (
        <div>
           <DefaultLayout>
               
               
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
