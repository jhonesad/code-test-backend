import { InvalidLengthError } from 'src/domain/exceptions/invalid-length-error';

export class User {
  private _id: string;
  private _name: string;
  private _description: string;
  private _createDate: Date;

  constructor(id: string, name: string, description: string, createDate: Date) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._createDate = createDate;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get createDate(): Date {
    return this._createDate;
  }
}
