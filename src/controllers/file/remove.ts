import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { File } from '../../typeorm/entities/File'

export const remove = async (request: Request, response: Response) => {
  const { fileId } = request.query

  const fileRepo = getRepository(File)
  try {
    const file = await fileRepo.findOne({ where: { id: fileId } })

    if (!file) return response.status(404).send('User not found')
    fileRepo.delete(fileId as string)

    return response.status(200).send({ success: true })
  } catch (err) {
    return response.status(400).send({ success: false })
  }
}
