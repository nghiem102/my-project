import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const listProduct = createAsyncThunk(
    'product/listProduct',
    async () => {
        const {data} = await axios.get('http://localhost:3001/api/products')
        return data
    }
)
export const remove = createAsyncThunk(
    'product/removeProduct',
    async (id) => {
        const {data} = await axios.delete('http://localhost:3001/api/products/'+id)
        return data
    }
)
export const createProduct = createAsyncThunk(
    'product/createProduct',
    async (product) => {
        const {data} = await axios.post('http://localhost:3001/api/products',product)
        return data
    }
)
export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (product) => {
        const {data} = await axios.put('http://localhost:3001/api/products/'+product._id,product)
        return data
    }
)


const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: []
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
    }
})

export default productSlice.reducer