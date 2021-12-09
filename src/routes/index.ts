import { Router } from 'express'

import file from './file'
import user from './user'

const router = Router()

router.use('/file', file)
router.use('/user', user)

export default router
