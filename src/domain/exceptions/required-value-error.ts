import { BusinessError } from './business-error';

export class RequiredValueError extends BusinessError {
  constructor(message: string) {
    super(message);
  }
}
