import { ErrorHandler } from '@angular/core';

export class GenericErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    console.error('ERROR', error);
  }
}
