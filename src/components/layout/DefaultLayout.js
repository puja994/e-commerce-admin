import React from 'react'
import {Headers} from './partials/Headers'
import {Footer} from './partials/Footer'
import { Container,Row, Col } from 'react-bootstrap'
import './defaultLayout.css'


export const DefaultLayout = ({children}) => {
    return (
        <div>

            

            <Row>
             <Col xs={4}>
               <div className="left-bar">
                    i am from left
                </div>
             </Col>
             <Col>
                <div className="main">
            <Headers />
            {children}
            <Footer />
                </div>
                </Col>
            </Row>
            </div>
           
       
    )
}
