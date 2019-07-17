import Heror from './../src/Heror';

describe('#Heror(statusCode, error, message, data)', () => {
  describe(`when statusCode=400, error='Bad Request'`, () => {
    const statusCode = 400;
    const error = 'Bad Request';
    let heror: Heror | undefined;

    beforeAll(() => {
      heror = new Heror(statusCode, error);
    });

    test('should have statusCode 400', () => {
      expect(heror!.statusCode).toBe(statusCode);
    });

    test('should have error Bad Request', () => {
      expect(heror!.error).toBe(error);
    });

    test('should have message Bad Request', () => {
      expect(heror!.message).toBe(error);
    });

    test('should not have data', () => {
      expect(heror!.data).toBe(undefined);
    });
  });

  describe(`when statusCode=401, error='Unauthorized', message='Invalid authentication', data={ token: '123random' }`, () => {
    const statusCode = 401;
    const error = 'Unauthorized';
    const message = 'Invalid authentication';
    const data = { token: '123random' }
    let heror: Heror | undefined;

    beforeAll(() => {
      heror = new Heror(statusCode, error, message, data);
    });

    test('should have statusCode 401', () => {
      expect(heror!.statusCode).toBe(statusCode);
    });

    test('should have error Unauthorized', () => {
      expect(heror!.error).toBe(error);
    });

    test('should have message Invalid authentication', () => {
      expect(heror!.message).toBe(message);
    });

    test('should have data', () => {
      expect(heror!.data).toEqual(data);
    });
  });
});
