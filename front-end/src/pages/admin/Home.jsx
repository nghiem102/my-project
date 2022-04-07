/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import user from '../../assets/img/IMG_6395.jpg'
import HeadDashboard from '../components/HeadDashboard'

const Home = () => {
  return (
    <main>
        <HeadDashboard title={'Home'}/>

        <ul className="box-info">
            <li>
                <i className='bx bxs-calendar-check' ></i>
                <span className="text">
                    <h3>1020</h3>
                    <p>New Order</p>
                </span>
            </li>
            <li>
                <i className='bx bxs-group' ></i>
                <span className="text">
                    <h3>2834</h3>
                    <p>Visitors</p>
                </span>
            </li>
            <li>
                <i className='bx bxs-dollar-circle' ></i>
                <span className="text">
                    <h3>$2543</h3>
                    <p>Total Sales</p>
                </span>
            </li>
        </ul>


        <div className="table-data">
            <div className="order">
                <div className="head">
                    <h3>Recent Orders</h3>
                    <i className='bx bx-search' ></i>
                    <i className='bx bx-filter' ></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Date Order</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={user}/>
                                <p>John Doe</p>
                            </td>
                            <td>01-10-2021</td>
                            <td><span className="status completed">Completed</span></td>
                        </tr>
                        <tr>
                            <td>
                                <img src={user}/>
                                <p>John Doe</p>
                            </td>
                            <td>01-10-2021</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>
                        <tr>
                            <td>
                                <img src={user}/>
                                <p>John Doe</p>
                            </td>
                            <td>01-10-2021</td>
                            <td><span className="status process">Process</span></td>
                        </tr>
                        <tr>
                            <td>
                                <img src={user}/>
                                <p>John Doe</p>
                            </td>
                            <td>01-10-2021</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>
                        <tr>
                            <td>
                                <img src={user}/>
                                <p>John Doe</p>
                            </td>
                            <td>01-10-2021</td>
                            <td><span className="status completed">Completed</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="todo">
                <div className="head">
                    <h3>Todos</h3>
                    <i className='bx bx-plus' ></i>
                    <i className='bx bx-filter' ></i>
                </div>
                <ul className="todo-list">
                    <li className="completed">
                        <p>Todo List</p>
                        <i className='bx bx-dots-vertical-rounded' ></i>
                    </li>
                    <li className="completed">
                        <p>Todo List</p>
                        <i className='bx bx-dots-vertical-rounded' ></i>
                    </li>
                    <li className="not-completed">
                        <p>Todo List</p>
                        <i className='bx bx-dots-vertical-rounded' ></i>
                    </li>
                    <li className="completed">
                        <p>Todo List</p>
                        <i className='bx bx-dots-vertical-rounded' ></i>
                    </li>
                    <li className="not-completed">
                        <p>Todo List</p>
                        <i className='bx bx-dots-vertical-rounded' ></i>
                    </li>
                </ul>
            </div>
        </div>
    </main>
  )
}

export default Home