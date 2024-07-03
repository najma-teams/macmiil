import { Router } from "express";
import { decodeToken } from "../helpers/secure/Jwt";
import { create, getall, getallsoft, getone, softdell, updatePro } from "../controllers/Product";
import upload  from "../helpers/multer";
const router = Router()




router.post('/new',upload.single("image"),decodeToken,create)
// router.post('/new',decodeToken,create)

router.get('/all',getall)
router.get('/one/:id',getone)
router.put('/update/',upload.single("image"),updatePro)
router.put('/soft/:id',softdell)
router.get('/allsoft',getallsoft)

export default router