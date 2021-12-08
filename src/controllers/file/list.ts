import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { File } from '../../typeorm/entities/File'
import { User } from '../../typeorm/entities/User'

export const list = async (request: Request, response: Response) => {
  const { user_id } = request.query

  const user = await User.findById(parseInt(user_id as string))
  if (!user) return response.status(404).send('User not found')

  const userFiles = await getRepository(File).find({ where: { owner: user } })

  return response.json(userFiles)
}
