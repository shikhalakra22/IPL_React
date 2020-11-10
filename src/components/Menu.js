import React from 'react'
import IPL_Logo from '../img/IPL.jpg'
import { Link } from 'react-router-dom'


function Menu() {
    return (
        <>
    <aside className="main-sidebar sidebar-dark-primary elevation-4 position-fixed">
    {/* Brand Logo */}
    <a href="/#" className="brand-link">
        <img src={IPL_Logo} alt="IPL Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8', marginLeft: 10}} />
        <span className="brand-text font-weight-light"  style={{color:"#fff",  margin: 20}}>IPL</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-4 pb-4 mb-4 d-flex">
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
            <a href="/#" className="nav-link">
                <i className="nav-icon fas fa-users" />
                <p>
                <Link to="/" >
                Teams
                </Link>
                </p>
            </a>
            </li>
            <li className="nav-item">
            <a href="/#" className="nav-link">
                <i className="nav-icon fas fa-chart-pie" />
                <p>
                <Link to="/seasons" >
                Seasons
                </Link>
                </p>
            </a>
            </li>
            <li className="nav-header">PLAYER</li>
            <li className="nav-item">
            <a href="/#" className="nav-link">
                <i className="nav-icon far fa-circle"  style={{color:"#EE5A24"}} />
                <p className="text"><Link to="/orange" >Orange Cap</Link></p>
            </a>
            </li>
            <li className="nav-item">
            <a href="/#" className="nav-link">
                <i className="nav-icon far fa-circle" style={{color:"#4834d4"}}/>
                <p className="text"><Link to="/purple" >Purple Cap</Link></p>
            </a>
            </li>
        </ul>
        </nav>
        {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
    </aside>

        </>
    )
}

export default Menu
