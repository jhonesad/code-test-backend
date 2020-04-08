import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  createDate: Date;

  @Column()
  avatar: Buffer
}
