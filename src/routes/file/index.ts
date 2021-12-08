import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '../../config/uploadConfig'
import { list } from '../../controllers/file/list'
import { remove } from '../../controllers/file/remove'
import { upload } from '../../controllers/file/upload'

const uploader = multer(uploadConfig)

const router = Router()

router.post('/upload', uploader.single('file'), upload)
router.get('/list', list)
router.delete('/delete', remove)

export default router
