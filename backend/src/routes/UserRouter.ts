import { Router } from "express";
import { changeRole, getall, login, register, updateuser } from "../controllers/UserController";
import { decodeToken } from "../helpers/secure/Jwt";
const router = Router();


router.post('/register',register)
router.put('/update/:userId',decodeToken,updateuser)
router.post('/login', login)
router.put('/change/:id',decodeToken,changeRole)
router.get('/all',getall)


export default router