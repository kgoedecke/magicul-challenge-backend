import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  getManager,
  UpdateDateColumn,
} from 'typeorm'

import { File } from './File'

@Entity()
export class User {
  constructor(name: string) {
    this.name = name
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  name: string

  @OneToMany(() => File, (file) => file.owner, { eager: true })
  @JoinColumn()
  files?: File[]

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  static async isNameAvailable(name: string) {
    const user = await getManager().findOne(User, {
      where: { name: name },
    })
    if (user) return false
    return true
  }

  static async findById(id: number) {
    const user = await getManager().findOne(User, id)
    return user
  }
}
