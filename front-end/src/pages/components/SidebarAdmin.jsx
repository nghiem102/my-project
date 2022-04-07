import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const SidebarAdmin = () => {
    useEffect(() => {
        const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

        allSideMenu.forEach(item=> {
            const li = item.parentElement;

            item.addEventListener('click', function () {
                allSideMenu.forEach(i=> {
                    i.parentElement.classList.remove('active');
                })
                li.classList.add('active');
            })
        });
    },[])
  return (
    <section id="sidebar">
		<NavLink to="#" className="brand">
			<i className='bx bxs-smile'></i>
			<span className="text">AdminHub</span>
		</NavLink>
		<ul className="side-menu top">
			<li className="active">
				<NavLink to="">
					<i className='bx bxs-dashboard' ></i>
					<span className="text">Dashboard</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="dashboard/products">
					<i className='bx bxs-shopping-bag-alt' ></i>
					<span className="text">Products</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="dashboard/category">
					<i className='bx bxs-doughnut-chart' ></i>
					<span className="text">Category</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="#">
					<i className='bx bxs-group' ></i>
					<span className="text">User</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="#">
					<i className='bx bxs-message-dots' ></i>
					<span className="text">Message</span>
				</NavLink>
			</li>
		</ul>
		<ul className="side-menu">
			<li>
				<NavLink to="#">
					<i className='bx bxs-cog' ></i>
					<span className="text">Settings</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="#" className="logout">
					<i className='bx bxs-log-out-circle' ></i>
					<span className="text">Logout</span>
				</NavLink>
			</li>
		</ul>
	</section>
  )
}

export default SidebarAdmin