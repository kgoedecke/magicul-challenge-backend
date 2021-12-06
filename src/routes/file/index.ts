import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '../../config/uploadConfig'
import { upload } from '../../controllers/file/upload'

const uploader = multer(uploadConfig)

const router = Router()

router.post('/upload', uploader.single('file'), upload)

export default router
