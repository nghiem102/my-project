import React from 'react'
import SidebarAdmin from '../components/SidebarAdmin'

import '../../assets/admin/main.css'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <SidebarAdmin/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout