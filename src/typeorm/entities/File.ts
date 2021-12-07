import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  getManager,
  UpdateDateColumn,
} from 'typeorm'

import { User } from './User'

@Entity()
export class File {
  constructor(filename: string, mimeType: string, size: number, data: Buffer, owner: User) {
    this.filename = filename
    this.mimeType = mimeType
    this.size = size
    this.owner = owner
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  filename: string

  @Column()
  size: number

  @Column()
  mimeType: string

  @ManyToOne(() => User, (user) => user.files)
  @JoinColumn()
  owner: User

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  static async save(file: File) {
    const savedFile = await getManager().save(file)
    return savedFile
  }
}
