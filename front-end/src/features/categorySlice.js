import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const listCategory = createAsyncThunk(
    'category/listCategory',
    async () => {
        const {data} = await axios.get('http://localhost:3001/api/categories')
        return data
    }
)
export const removeCategory = createAsyncThunk(
    'category/removeCategory',
    async (id) => {
        const {data} = await axios.delete('http://localhost:3001/api/categories/'+id)
        return data
    }
)
export const createCategory = createAsyncThunk(
    'category/createCategory',
    async (product) => {
        const {data} = await axios.post('http://localhost:3001/api/categories',product)
        return data
    }
)
export const updateCategory = createAsyncThunk(
    'category/updateCategory',
    async (product) => {
        const {data} = await axios.put('http://localhost:3001/api/categories/'+product._id,product)
        return data
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(listCategory.fulfilled, (state, {payload}) => {
            state.value = payload
        })
        builder.addCase(removeCategory.fulfilled, (state, {payload}) => {
            state.value = state.value.filter(item => item._id !== payload._id)
        })
        builder.addCase(createCategory.fulfilled, (state, {payload}) => {
            state.value.push(payload)
        })
        builder.addCase(updateCategory.fulfilled, (state, {payload}) => {
            state.value = state.value.map(item => item._id !== payload._id? item: payload)
        })
    }
})

export default categorySlice.reducer