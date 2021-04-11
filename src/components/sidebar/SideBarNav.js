import React from 'react'
import './sideBarNav.style.css'

const SideBarNav = () => {
    return (
        <div className="sidebar-nav">
            
            <ul>
                <li>Dashboard</li>
                <li><a href="/Category">Category</a></li>
                <li>Products</li>
                <li>Orders</li>
                <li>Users</li>
                <li>Accounts</li>


            </ul>
        </div>
    )
}
export default SideBarNav;