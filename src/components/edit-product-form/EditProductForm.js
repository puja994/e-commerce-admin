
import React , {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form,Button, InputGroup, Spinner, Alert} from 'react-bootstrap'
import {fetchAProduct} from '../../pages/edit-product/editProductAction'
//import { addeditProduct } from '../../pages/product/productAction'
//import {EditeditProduct} from '../../pages/product/productAction'
import {useParams} from 'react-router-dom'


const initialState = {
name: "",
qty: 0,
isAvailable: true,
price: 0,
salePrice: 0,
saleEndDate: null,
description: "",
images: [],
categories: []

}



export const EditProductForm = () => {
  const dispatch = useDispatch()
  const {_id} = useParams()

    const [editProduct, setEditProduct] = useState(initialState)
    const {isLoading, status, message, product} = useSelector(state => state.selectedProduct)

    useEffect(() => {

     
      if(!editProduct._id){
      dispatch(fetchAProduct(_id))
      setEditProduct(product)}
      
    }, [dispatch, editProduct, _id])

    //product._id !== editProduct._id && setEditProduct(product)
      
    

    
    
    //console.log("from edit pro", fromcomponent)

    const handleOnChange = e =>{
        const{name,value, checked} = e.target
       // console.log(checked)
        
       let val = value
        if(name === 'isAvailable'){
          val = checked

        }


        setEditProduct({
            ...editProduct,
            [name]: val,
        })
        
    }

    const handleOnSubmit = e=>{
        e.preventDefault()
        console.log(editProduct)
       //dispatch(addeditProduct(editProduct)) 
    }
   
    return (
        <div>
 
         {
            isLoading && <Spinner variant="primary" animation="border" />
          }

          {
            message && <Alert variant = {status ==='success' ? 'success' : 'danger'}>
              {message}
            </Alert>
          }

          {
            !product._id ? ( <h1>product not found</h1>) :
            (
              <Form onSubmit={handleOnSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control name="name" type="text" placeholder="Enter product name"  required value={editProduct.name} onChange={handleOnChange}/>
   
  </Form.Group>

  <Form.Group >
    <Form.Check name="isAvailable" id="isAvailable" type="switch" label="Available" checked={editProduct.isAvailable} onChange={handleOnChange} />
  </Form.Group>

  <InputGroup.Radio name="isAvailable" />

  <Form.Group >
    <Form.Label>price</Form.Label>
    <Form.Control name="price" type="number" placeholder="45.0"  required value={editProduct.price} onChange={handleOnChange}/>
  </Form.Group>


  <Form.Group >
    <Form.Label>saleprice</Form.Label>
    <Form.Control name="salePrice" type="number" placeholder="45.0" value={editProduct.salePrice} onChange={handleOnChange}/>
  </Form.Group>

  <Form.Group >
    <Form.Label>sale end date</Form.Label>
    <Form.Control name="saleEndDate" type="date" value={editProduct.saleEndDate} onChange={handleOnChange}/>
  </Form.Group>

  <Form.Group >
    <Form.Label>Quantity</Form.Label>
    <Form.Control name="qty" type="number" placeholder="50" required value={editProduct.qty} onChange={handleOnChange}/>
  </Form.Group>


  <Form.Group >
    <Form.Label>Description</Form.Label>
    <Form.Control name="description" type="text" as="textarea" placeholder="Write full description" rows={5} required value={editProduct.description} onChange={handleOnChange}/>
  </Form.Group>

  {/*<Form.Group >
    <Form.Label>Images</Form.Label>
    <Form.File name="images" id="exampleFormControlFile1" label="Example file input" value={editProduct.images} onChange={handleOnChange} />
  </Form.Group>*/}


  {/*<Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>select categories</Form.Label>
    <Form.Control name="categories" as="select" multiple required defaultValue={editProduct.categories} onChange={handleOnChange}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>*/}
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
// {isLoading && <Spinner variant="primary" animation="border" />}
            )
          }

            
        </div>
    )
}

