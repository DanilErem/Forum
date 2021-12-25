import { Router } from 'express'
import userController from '../controllers/userController.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import checkRoleMiddleLayer from '../middlewares/checkRoleMiddleLayer.js'

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/check', authMiddleware, userController.check)
router.get('/list', checkRoleMiddleLayer('ADMIN'), userController.list)

export default router