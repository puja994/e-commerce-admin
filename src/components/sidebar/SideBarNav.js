import React from 'react'
import './sideBarNav.style.css'
import {Link} from 'react-router-dom'

const SideBarNav = () => {
    return (
        <div className="sidebar-nav">
            
            <ul>
                <li>
                <Link to="/dashboard">
                <i className="fas fa-columns"></i>Dashboard </Link>
                </li>

                <li>
                <Link to="/category">
                <i className="far fa-user"></i>Category </Link>
                </li>

                <li>
                <Link to="/products">
                <i className="fab fa-product-hunt"></i>Products </Link>
                </li>

                <li>
                <Link to="/orders">
                <i className="fab fa-first-order"></i>Orders </Link>
                </li>

                <li>
                <Link to="/users">
                <i className="fas fa-user"></i>Users </Link>
                </li>

                <li>
                <Link to="/account">
                <i className="fas fa-file-invoice"></i>Accounts </Link>
                </li>
                


            </ul>
        </div>
    )
}
export default SideBarNav;