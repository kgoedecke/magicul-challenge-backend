import { Router } from 'express'

import { create } from '../../controllers/user/create'

const router = Router()

router.post('/create', create)

export default router
