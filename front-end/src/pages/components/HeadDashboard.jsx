import React from 'react'
import { NavLink } from 'react-router-dom'

const HeadDashboard = ({title}) => {
  return (
    <div className="head-title">
        <div className="left">
            <h1>Dashboard</h1>
            <ul className="breadcrumb">
                <li>
                    <NavLink to="#">Dashboard</NavLink>
                </li>
                <li><i className='bx bx-chevron-right' ></i></li>
                <li>
                    <NavLink className="active" to="#">{title}</NavLink>
                </li>
            </ul>
        </div>
        <div className="btn-download">
            <i className='bx bxs-cloud-download' ></i>
            <span className="text">Download PDF</span>
        </div>
    </div>
  )
}

export default HeadDashboard