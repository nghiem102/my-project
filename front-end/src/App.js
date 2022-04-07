import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddCategory from './pages/admin/AddCategory';
import AddForm from './pages/admin/AddForm';
import Category from './pages/admin/Category';
import Dashboard from './pages/admin/Dashboard';
import EditCategory from './pages/admin/EditCategory';
import EditForm from './pages/admin/EditForm';
import Home from './pages/admin/Home';
import Products from './pages/admin/Products';
import HomePage from './pages/client/HomePage';
import ProductDetail from './pages/client/ProductDetail';
import ProductsPage from './pages/client/ProductsPage';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path='product' element={<ProductsPage/>} />
          <Route path='productDetail/:id' element={<ProductDetail/>} />
        </Route>
        <Route path='admin' element={<AdminLayout/>} >
          <Route index element={<Navigate to={'dashboard'} />} />
          <Route path='dashboard' element={<Dashboard/>} >
            <Route index element={<Home/>} />
            <Route path='products' element={<Products/>} />
            <Route path='category' element={<Category/>} />
            <Route path='addproduct' element={<AddForm/>} />
            <Route path=':id/editproduct' element={<EditForm/>} />
            <Route path='addcategory' element={<AddCategory/>} />
            <Route path=':id/editcategory' element={<EditCategory/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
