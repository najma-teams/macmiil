import { Router } from "express";
import { decodeToken } from "../helpers/secure/Jwt";
import { addToCart, getallcart } from "../controllers/cartController";
const router = Router()

router.post('/add',decodeToken,addToCart)  
router.get('/all',decodeToken,getallcart)

export default router