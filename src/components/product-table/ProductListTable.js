import React , {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Table, Spinner,Alert,Button} from 'react-bootstrap'
import {deleteProduct, fetchProducts} from '../../pages/product/productAction'
import {useHistory} from 'react-router-dom'

const ProductListTable = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {isLoading, status, message, productList} = useSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
    
  }, [dispatch])

  const handleOnDelete = _id => {
    dispatch(deleteProduct(_id))
  }
    return (
        <div>
          {
            isLoading && <Spinner variant="primary" animation="border" />
          }

          {
            message && 
            <Alert variant = {status ==='success' ? 'success' : 'danger'}>
              {message}
            </Alert>
          }
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>status</th>
      <th>thumbnail</th>
      <th> name </th>
      <th>price</th>
      <th>edit</th>
      <th>delete</th>
    </tr>
  </thead>
  <tbody>
    
    
    
      {productList.length &&
        productList.map((row, i)=>(
          <tr key={row._id}>
          <td>{i}</td>
          <td>{row.status}</td>
          <td>put img here</td>
          <td>{row.name}</td>
          <td>{row.price}</td>
          <td><Button variant="primary"
          onClick= {()=>history.push(`/product/${row._id}`)}
          
          >Edit</Button></td>
          <td><Button 
          variant="danger"
          onClick ={()=> handleOnDelete(row._id)}>delete</Button></td>

          
          </tr>

        ))
      }


     
  
    
  </tbody>
</Table>
        </div>
    )
}
export default ProductListTable;