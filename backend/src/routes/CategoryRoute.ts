import { Router } from "express";
import { createCateory, getall } from "../controllers/Category";
import { decodeToken } from "../helpers/secure/Jwt";
const router = Router();

router.post('/new',decodeToken,createCateory)
router.get('/all',getall)


export default router