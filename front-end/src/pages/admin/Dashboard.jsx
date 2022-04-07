/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import user from '../../assets/img/IMG_6395.jpg'

const Dashboard = () => {
  return (
    <div id='content'>
        <nav>
			<i className='bx bx-menu' ></i>
			<NavLink to="#" className="nav-link">Categories</NavLink>
			<form action="#">
				<div className="form-input">
					<input type="search" placeholder="Search..."/>
					<button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden/>
			<label htmlFor="switch-mode" className="switch-mode"></label>
			<NavLink to="#" className="notification">
				<i className='bx bxs-bell' ></i>
				<span className="num">8</span>
			</NavLink>
			<NavLink to="#" className="profile">
				<img src={user}/>
			</NavLink>
		</nav>
        <Outlet/>
    </div>
  )
}

export default Dashboard