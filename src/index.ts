import Heror from './Heror';
export { default as Heror } from './Heror';

export type HerorClass = new (message?: string | undefined, data?: any) => Heror;

// 4xx Errors
export const BadRequestError = Heror.bind(this, 400, 'Bad Request');
export const UnauthorizedError = Heror.bind(this, 401, 'Unauthorized');
export const ForbiddenError = Heror.bind(this, 403, 'Forbidden');
export const NotFoundError = Heror.bind(this, 404, 'Not Found');
export const MethodNotAllowedError = Heror.bind(this, 405, 'Method Not Allowed');
export const NotAcceptableError = Heror.bind(this, 406, 'Not Acceptable');
export const RequestTimeoutError = Heror.bind(this, 408, 'RequestTimeoutError');
export const ConflictError = Heror.bind(this, 409, 'Conflict');
export const PreconditionFailedError = Heror.bind(this, 412, 'Precondition Failed');
export const UnprocessableEntityError = Heror.bind(this, 422, 'Unprocessable Entity');

// 5xx Errors
export const InternalServerError = Heror.bind(this, 500, 'Internal Server Error');
export const NotImplementedError = Heror.bind(this, 501, 'Not Implemented');
export const ServiceUnavailableError = Heror.bind(this, 503, 'Service Unavailable');
export const InsufficientStorageError = Heror.bind(this, 507, 'Insufficient Storage');
export const NotExtendedError = Heror.bind(this, 510, 'Not Extended');

export function createError(statusCode: number, error: string): HerorClass {
  return Heror.bind(this, statusCode, error);
}
