import Herrors from './Herrors';
export { default as Herrors } from './Herrors';

// 4xx Errors
export const BadRequestError = Herrors.bind(this, 400, 'Bad Request');
export const UnauthorizedError = Herrors.bind(this, 401, 'Unauthorized');
export const ForbiddenError = Herrors.bind(this, 403, 'Forbidden');
export const NotFoundError = Herrors.bind(this, 404, 'Not Found');
export const MethodNotAllowedError = Herrors.bind(this, 405, 'Method Not Allowed');
export const NotAcceptableError = Herrors.bind(this, 406, 'Not Acceptable');
export const RequestTimeoutError = Herrors.bind(this, 408, 'RequestTimeoutError');
export const ConflictError = Herrors.bind(this, 409, 'Conflict');
export const PreconditionFailedError = Herrors.bind(this, 412, 'Precondition Failed');
export const UnprocessableEntityError = Herrors.bind(this, 422, 'Unprocessable Entity');

// 5xx Errors
export const InternalServerError = Herrors.bind(this, 500, 'Internal Server Error');
export const NotImplementedError = Herrors.bind(this, 501, 'Not Implemented');
export const ServiceUnavailableError = Herrors.bind(this, 503, 'Service Unavailable');
export const InsufficientStorageError = Herrors.bind(this, 507, 'Insufficient Storage');
export const NotExtendedError = Herrors.bind(this, 510, 'Not Extended');

export function createError(code: number, error: string) {
  return Herrors.bind(this, code, error);
}
