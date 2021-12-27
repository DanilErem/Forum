import { Router } from 'express'
import userRouter from './userRouter.js'
import chatRouter from './chatRouter.js'
import messageRouter from './messageRouter.js'
const router = new Router()

router.use('/user', userRouter)
router.use('/chat', chatRouter)
router.use('/message', messageRouter)

export default router