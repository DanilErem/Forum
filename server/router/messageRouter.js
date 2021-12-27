import { Router } from 'express'
import messageController from '../controllers/messageController.js'

import authMiddleware from '../middlewares/authMiddleware.js'
import checkRoleMiddleLayer from '../middlewares/checkRoleMiddleLayer.js'

const router = new Router()

router.post('/', messageController.create)
router.get('/', messageController.getAll)
router.get('/user/:id', messageController.getByUser)
router.get('/chat/:id', messageController.getByChat)
router.get('/:id', messageController.getOne)
router.delete('/:id', messageController.delete)

export default router