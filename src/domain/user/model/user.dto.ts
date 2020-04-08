import { ObjectID } from "typeorm";

export class UserDTO {
  id: string;
  name: string;
  description: string;
  createDate: Date;
  avatar: Buffer;
}
