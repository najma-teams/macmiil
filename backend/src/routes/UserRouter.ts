import { Router } from "express";
import { changeRole, getDetails, getall, login, register, updateuser } from "../controllers/UserController";
import { decodeToken } from "../helpers/secure/Jwt";
const router = Router();


router.post('/register',register)
router.put('/update/',decodeToken,updateuser)
router.post('/login', login)
router.put('/change/:id',decodeToken,changeRole)
router.get('/all',getall)
router.get('/getuser/:id',getDetails)


export default router