import { Router } from 'express'
import chatController from '../controllers/chatController.js'

import authMiddleware from '../middlewares/authMiddleware.js'
import checkRoleMiddleLayer from '../middlewares/checkRoleMiddleLayer.js'

const router = new Router()

router.post('/', chatController.create)
router.get('/', chatController.getAll)
router.get('/user/:id', chatController.getByUser)
router.get('/:id', chatController.getOne)
router.delete('/:id', chatController.delete)

export default router