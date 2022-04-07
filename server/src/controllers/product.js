import Products from "../Models/products";

export const create = async (req,res) => {
    try {
        const product = await Products(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "khong them duoc"
        })
    }
}

export const list = async (req,res) => {
    try {
        const products = await Products.find().exec()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "khong lay duoc"
        })
    }
}
export const read = async (req,res) => {
    const condition = {_id: req.params.id}
    try {
        const product = await Products.findOne(condition).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "khong lay duoc"
        })
    }
}
export const remove = async (req,res) => {
    const condition = {_id: req.params.id}
    try {
        const product = await Products.findOneAndDelete(condition).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "khong xoa duoc"
        })
    }
}
export const update = async (req,res) => {
    const condition = {_id: req.params.id}
    const document = req.body
    try {
        const product = await Products.findOneAndUpdate(condition,document,{new:true}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "khong lay duoc"
        })
    }
}