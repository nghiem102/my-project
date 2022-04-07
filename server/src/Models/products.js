import mongoose, {Schema} from "mongoose";
const {ObjectId} = mongoose.Types

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required:true,
        minlength:6
    },
    img: {
        type:String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: 'category'
    }
}, {timestamps: true})

export default mongoose.model('product', productSchema)