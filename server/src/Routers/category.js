import { Router } from "express";
import { create, getProductByCategory, list, read, remove, update } from "../controllers/category";

const router = Router()

router.post('/categories',create)
router.get('/categories',list)
router.get('/categories/:id',read)
router.delete('/categories/:id',remove)
router.put('/categories/:id',update)
router.get('/categories/:id/products',getProductByCategory)

export default router