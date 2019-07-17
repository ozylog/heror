import * as index from './../src/index';

describe('#index', () => {
  describe('when import Heror class', () => {
    test('should exist', () => {
      expect(index.Heror).toBeDefined();
      expect(index.Heror.name).toBe('Heror');
    });
  });

  [
    'BadRequestError',
    'UnauthorizedError',
    'ForbiddenError',
    'NotFoundError',
    'MethodNotAllowedError',
    'NotAcceptableError',
    'RequestTimeoutError',
    'ConflictError',
    'PreconditionFailedError',
    'UnprocessableEntityError',
    'InternalServerError',
    'NotImplementedError',
    'ServiceUnavailableError',
    'InsufficientStorageError',
    'NotExtendedError'
  ].forEach((className) => {
    describe(`when import ${className} class`, () => {
      test('should exist', () => {
        expect(index[className as keyof typeof index]).toBeDefined();
      });
    });
  });

  describe('#createError(statusCode, error)', () => {
    const createError = index.createError;

    describe('when statusCode=414, error=URI Too Long', () => {
      const statusCode = 414;
      const error = 'URI Too Long';
      let URITooLongError: index.HerorClass | undefined;

      beforeAll(() => {
        URITooLongError = createError(statusCode, error);
      });

      test('should create error class', () => {
        expect(URITooLongError!.name).toBe('bound Heror');
      });

      describe('when create instance', () => {
        let uriError: index.Heror | undefined;

        beforeAll(() => {
          uriError = new URITooLongError!();
        });

        test('should be instance of Heror and Error', () => {
          expect(uriError!).toBeInstanceOf(Error);
          expect(uriError!).toBeInstanceOf(index.Heror);
        });

        test('should have correct property', () => {
          expect(uriError!.statusCode).toBe(statusCode);
          expect(uriError!.error).toBe(error);
          expect(uriError!.message).toBe(error);
          expect(uriError!.data).toBeUndefined();
        });
      });

      describe('when create instance with message and data', () => {
        const message = 'Max URI Length is 100 characters';
        const data = { uriLength: 111 };
        let uriError: index.Heror | undefined;

        beforeAll(() => {
          uriError = new URITooLongError!(message, data);
        });

        test('should be instance of Heror and Error', () => {
          expect(uriError!).toBeInstanceOf(Error);
          expect(uriError!).toBeInstanceOf(index.Heror);
        });

        test('should have correct property', () => {
          expect(uriError!.statusCode).toBe(statusCode);
          expect(uriError!.error).toBe(error);
          expect(uriError!.message).toBe(message);
          expect(uriError!.data).toEqual(data);
        });
      });
    });
  });
});
