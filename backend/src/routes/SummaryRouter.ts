import { Router } from "express";
// import { createCateory, getall } from "../controllers/Category";
import { decodeToken } from "../helpers/secure/Jwt";
import { registerSummary } from "../controllers/summaryController";
// import { CreateOrder, Getallorders } from "../controllers/order";
// import {} from "../controllers/Category"
const router = Router();

// router.post('/new',decodeToken,CreateOrder)
router.get('/all',registerSummary)


export default router