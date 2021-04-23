import React from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { AddProductForm } from '../../components/add-product-form/AddProductForm'
import {Card, Spinner, Alert} from 'react-bootstrap'
import { EditProductForm } from '../../components/edit-product-form/EditProductForm'
import {useParams} from 'react-router-dom'

export const EditProduct = () => {

    //const {_id} = useParams()
    //console.log("from edit pro", useParams())
    return (
        <DefaultLayout>
            <h1>Edit products</h1>
            <hr />
            <div className="add-new-product-form">
                <Card className="p-4">
                {/*<AddProductForm />*/}
                <EditProductForm />
                </Card>
            </div>
        </DefaultLayout>
    )
}
