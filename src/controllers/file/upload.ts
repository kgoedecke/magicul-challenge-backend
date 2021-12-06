import { Request, Response } from 'express'
import moment from 'moment'

export const upload = async (request: Request, response: Response) => {
  const file = request.file

  return response.send({
    fileName: file.originalname,
    fileSize: file.size,
    fileFormat: file.mimetype,
    lastModifiedDate: moment(),
  })
}
