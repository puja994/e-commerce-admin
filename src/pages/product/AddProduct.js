import React from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { AddProductForm } from '../../components/new-product-form/AddProductForm'
import {Card} from 'react-bootstrap'

export const AddProduct = () => {
    return (
        <DefaultLayout>
            <h1>Add new products</h1>
            <hr />
            <div className="add-new-product-form">
                <Card className="p-4">
                <AddProductForm />
                </Card>
            </div>
        </DefaultLayout>
    )
}
