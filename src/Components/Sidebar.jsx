import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link to='/dashboard' className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup>
                </div>
            </Link>

            
            <hr id="side" className="sidebar-divider my-0">
            </hr>
                <li className="nav-item">
                    <Link to={'/dashboard'} className="nav-Link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                        <div className='side'>
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Dashboard</span>
                    </div>
                    </Link>
                </li>

            <li className="nav-item">
                <Link to='/Useradd' className="nav-Link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                        <div className='side'>
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Useradd</span>
                    </div>
                </Link>
            </li>
            <hr className="sidebar-divider">
            </hr>
            </ul>
        </>
}

export default Sidebar