import { Router } from "express";
// import { createCateory, getall } from "../controllers/Category";
import { decodeToken } from "../helpers/secure/Jwt";
import { CreateOrder, Getallorders } from "../controllers/order";
const router = Router();

router.post('/new',decodeToken,CreateOrder)
router.get('/all',Getallorders)


export default router