import Category from "../Models/category";
import Products from "../Models/products";

export const create = async (req, res) => {
    const condition = req.body
    try {
        const category = await new Category(condition).save()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            message: "khong them duoc danh muc"
        })
    }
}

export const list = async (req,res) => {
    try {
        const categories = await Category.find({}).exec()
        res.json(categories)
    } catch (error) {
        res.status(400).json({
            message: 'khong lay duoc'
        })
    }
}
export const read = async (req,res) => {
    const condition = {_id: req.params.id}
    try {
        const category = await Category.findOne(condition).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            message: 'khong lay duoc'
        })
    }
}
export const remove = async (req,res) => {
    const condition = {_id: req.params.id}
    try {
        const category = await Category.findOneAndDelete(condition).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            message: 'khong xoa duoc'
        })
    }
}
export const update = async (req,res) => {
    const condition = {_id: req.params.id}
    const document = req.body
    try {
        const category = await Category.findOneAndUpdate(condition,document,{new:true}).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            message: 'khong cap nhat duoc'
        })
    }
}

export const getProductByCategory = async (req,res) => {
    const condition = {_id: req.params.id}
    try {
        const category = await Category.findOne(condition).exec()
        const products = await Products.find({category}).select('-category').exec()
        res.json({
            category,
            products
        })
    } catch (error) {
        res.status(400).json({
            message: "khong lay duoc"
        })
    }
}