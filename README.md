# herrors
HTTP error classes

## Install
```
yarn add herrors
```

## Class
```
new BadRequestError(message: string = 'Bad Request', data?: any)
```
- `message` - error message
- `data` - optional input that you can use for additional information regarding the error

## Function
```
createError(statusCode: number, error: string)
```
- `statusCode` - http error status code
- `error` - official http error type/message

## List of error classes
We provide some common http errors below. If your case is not covered by the errors. You could create new error using `createError` function. Please see [usage examples](#usageexamples).

| Status Code | Error Class Name         |
|-------------|--------------------------|
| 400         | BadRequestError          |
| 401         | UnauthorizedError        |
| 403         | ForbiddenError           |
| 404         | NotFoundError            |
| 405         | MethodNotAllowedError    |
| 406         | NotAcceptableError       |
| 408         | RequestTimeoutError      |
| 409         | ConflictError            |
| 412         | PreconditionFailedError  |
| 422         | UnprocessableEntityError |
| 500         | InternalServerError      |
| 501         | NotImplementedError      |
| 503         | ServiceUnavailableError  |
| 507         | InsufficientStorageError |
| 508         | NotExtendedError         |

## Usage Examples
```
import { BadRequestError, UnauthorizedError, createError } from 'herrors';

const URITooLongError = createError(414, 'URI Too Long');

async function userController(req, res, next) {
  if (!req.auth) {
    throw new UnauthorizedError('Authentication is required', {
      expose: true,
      details: {}
    });
  }
  /*
    it will throw error instance
    {
      statusCode: 401,
      error: 'Unauthorized',
      message: 'Authentication is required',
      data: {
        expose: true,
        details: {}
      },
      ...nativeErrorProperties
    }
  /*

  if (!req.params.id) throw new BadRequestError();
  /*
    it will throw error instance
    {
      statusCode: 400,
      error: 'Bad Request',
      message: 'Bad Request',
      ...nativeErrorProperties
    }
  */

  if (req.uri.length > 100) {
    throw new URITooLongError('Max URI Length is 100 characters', {
      uriLength: req.uri.length
    });
  }
  /*
    it will throw error instance
    {
      statusCode: 414,
      error: 'URI Too Long',
      message: 'Max URI Length is 100 characters',
      data: {
        uriLength: 111
      },
      ...nativeErrorProperties
    }
  /*

}

```

## License
MIT
