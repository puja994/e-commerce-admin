import React , {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form,Button, InputGroup, Spinner, Alert} from 'react-bootstrap'
//import { addNewProduct } from '../../pages/product/productAction'
import {addNewProduct} from '../../pages/product/productAction'

// const product ={
//     name,
//     slug,
//     qty,
//     description,
//     price,
//     salePrice,
// saleprice end date
//     images: [],
//     thumbnail,
//     categories[]
//status
//isAvailable
//     //reviews,

// }

const initialState = {
name: "",
qty: 0,
isAvailable: 'off',
price: 0,
salePrice: 0,
saleEndDate: null,
description: "",
images: [],
categories: []

}


export const AddProductForm = () => {
  const dispatch = useDispatch()

    const [newProduct, setNewProduct] = useState(initialState)
    const {isLoading, status, message} = useSelector(state => state.product)

    const handleOnChange = e =>{
        const{name,value} = e.target

        setNewProduct({
            ...newProduct,
            [name]: value,
        })
        
    }

    const handleOnSubmit = e=>{
        e.preventDefault()
       dispatch(addNewProduct(newProduct)) 
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

            <Form onSubmit={handleOnSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control name="name" type="text" placeholder="Enter product name"  required value={newProduct.name} onChange={handleOnChange}/>
    {/*<Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>*/}
  </Form.Group>

  <Form.Group >
    <Form.Check name="isAvailable" id="isAvailable" type="switch" label="Available" value={newProduct.isAvailable} onChange={handleOnChange} />
  </Form.Group>

  <InputGroup.Radio name="isAvailable" />

  <Form.Group >
    <Form.Label>price</Form.Label>
    <Form.Control name="price" type="number" placeholder="45.0"  required value={newProduct.price} onChange={handleOnChange}/>
  </Form.Group>


  <Form.Group >
    <Form.Label>saleprice</Form.Label>
    <Form.Control name="salePrice" type="number" placeholder="45.0" value={newProduct.salePrice} onChange={handleOnChange}/>
  </Form.Group>

  <Form.Group >
    <Form.Label>sale end date</Form.Label>
    <Form.Control name="saleEndDate" type="date" value={newProduct.saleEndDate} onChange={handleOnChange}/>
  </Form.Group>

  <Form.Group >
    <Form.Label>Quantity</Form.Label>
    <Form.Control name="qty" type="number" placeholder="50" required value={newProduct.qty} onChange={handleOnChange}/>
  </Form.Group>


  <Form.Group >
    <Form.Label>Description</Form.Label>
    <Form.Control name="description" type="text" as="textarea" placeholder="Write full description" rows={5} required value={newProduct.description} onChange={handleOnChange}/>
  </Form.Group>

  {/*<Form.Group >
    <Form.Label>Images</Form.Label>
    <Form.File name="images" id="exampleFormControlFile1" label="Example file input" value={newProduct.images} onChange={handleOnChange} />
  </Form.Group>*/}


  {/*<Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>select categories</Form.Label>
    <Form.Control name="categories" as="select" multiple required defaultValue={newProduct.categories} onChange={handleOnChange}>
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
{isLoading && <Spinner variant="primary" animation="border" />}
        </div>
    )
}
