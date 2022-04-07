import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createCategory } from '../../features/categorySlice'
import HeadDashboard from '../components/HeadDashboard'

const AddCategory = () => {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onAdd = (data) => {
        dispatch(createCategory(data))
        navigate('/admin/dashboard/category')
    }
  return (
    <main>
        <HeadDashboard title={'Add Category'}/>
        <div id='AddCategory'>
            <form onSubmit={handleSubmit(onAdd)}>
                <input type="text" {...register('name')} />
                <button>Add</button>
            </form>
        </div>
    </main>
  )
}

export default AddCategory