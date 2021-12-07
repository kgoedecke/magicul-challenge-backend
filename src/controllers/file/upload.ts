import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { File } from '../../typeorm/entities/File'
import { User } from '../../typeorm/entities/User'

export const upload = async (request: Request, response: Response) => {
  const { body, file } = request

  const user = await User.findById(body.user_id)
  if (!user) throw new Error('User not found')

  console.log({ file })

  const fileWithOwner = {
    filename: file.originalname,
    mimeType: file.mimetype,
    size: file.size,
    data: file.buffer,
    owner: user,
  }

  const fileToSave = await getRepository(File).save(fileWithOwner)

  return response.send({
    fileName: fileToSave.filename,
    fileSize: fileToSave.size,
    fileFormat: fileToSave.mimeType,
    lastModifiedDate: fileToSave.updatedAt,
  })
}
