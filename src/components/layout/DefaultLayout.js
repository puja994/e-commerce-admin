import React from 'react'
import Headers from './partials/Headers'
import {Footer} from './partials/Footer'
import { Container,Row, Col,Jumbotron } from 'react-bootstrap'
import './defaultLayout.style.css'
import SideBarNav from '../sidebar/SideBarNav'


 const DefaultLayout = ({children}) => {
    return (
        <div className="default-layout">
         <div className="left-bar">
             <div className="admin-log p-2 mb-5">Admin pannel</div>
             <hr  className="divider" />
       <SideBarNav/>
         </div>
             
            <div className="main">
            <Headers />
            <Jumbotron>
            {children}
            </Jumbotron>
            <Footer />
                </div>
           
            </div>
           
       
    )
}
export default DefaultLayout;