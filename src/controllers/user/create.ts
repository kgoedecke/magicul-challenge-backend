import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { User } from '../../typeorm/entities/User'

export const create = async (request: Request, response: Response) => {
  const { name } = request.body
  const userNameAvailability = await User.isNameAvailable(name)

  if (userNameAvailability) {
    const user = await getRepository(User).save(request.body)

    response.json(user)
  }

  const user = await getRepository(User).findOne({ where: { name: name } })

  // Sign User In if username exists
  response.status(200).json(user)
}
