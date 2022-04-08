import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const listProduct = createAsyncThunk(
    'product/listProduct',
    async () => {
        const {data} = await axios.get('http://localhost:3001/api/products')
        return data
    }
)
export const productByCategory = createAsyncThunk(
    'product/productByCategory',
    async (id) => {
        const {data} = await axios.get(`http://localhost:3001/api/categories/${id}/products`)
        return data.products
    }
)
export const readProduct = createAsyncThunk(
    'product/readProduct',
    async (id) => {
        const {data} = await axios.get('https://my-shop-phi.vercel.app/api/products/'+id)
        return data
    }
)
export const remove = createAsyncThunk(
    'product/removeProduct',
    async (id) => {
        const {data} = await axios.delete('https://my-shop-phi.vercel.app/api/products/'+id)
        return data
    }
)
export const createProduct = createAsyncThunk(
    'product/createProduct',
    async (product) => {
        const {data} = await axios.post('https://my-shop-phi.vercel.app/api/products',product)
        return data
    }
)
export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (product) => {
        const {data} = await axios.put('https://my-shop-phi.vercel.app/api/products/'+product._id,product)
        return data
    }
)


const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: [],
        product: {}
    },
    extraReducers: (builder) => {
        builder.addCase(listProduct.fulfilled, (state,action) => {
            state.value = action.payload
        })
        builder.addCase(remove.fulfilled, (state,action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(createProduct.fulfilled, (state,{payload}) => {
            state.value.push(payload)
        })
        builder.addCase(updateProduct.fulfilled, (state,{payload}) => {
            state.value = state.value.map(item => item._id !== payload._id ? item : payload)
        })
        builder.addCase(readProduct.fulfilled, (state,{payload}) => {
            state.product = payload
        })
        builder.addCase(productByCategory.fulfilled, (state,{payload}) => {
            state.value = payload
        })
    }
})

export default productSlice.reducer