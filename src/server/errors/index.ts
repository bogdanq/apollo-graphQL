enum ErrorType {
  DISALLOWED_REQUEST,
  EMAIL_IS_ALREADY_TAKEN,
  INVALID_CAPTCHA,
  INVALID_CURRENT_PASSWORD,
  INVALID_OPERATION,
  INVALID_PARAMS,
  INVALID_TEMPORARY_CODE,
  INVALID_TWO_FA_TOKEN,
  INVALID_USER_OR_PASSWORD,
  MAINTENANCE,
  NO_ATTEMPTS_LEFT,
  PERMISSION_DENIED,
  TOO_MANY_REQUESTS,
  UNEXPECTED_ERROR,
  USER_DOES_NOT_EXISTS,
  VALIDATION_ERROR
}

enum ErrorBehaviorType {
  USUAL, // обычная ошибка
  UNLOGGED, // не попадает в логи
  RELOADABLE // перезагружает страницу
}

const getErrorBehaviorType = (errorType: ErrorType) => {
  switch (errorType) {
    case ErrorType.EMAIL_IS_ALREADY_TAKEN:
    case ErrorType.INVALID_USER_OR_PASSWORD:
    case ErrorType.INVALID_CURRENT_PASSWORD:
    case ErrorType.INVALID_TWO_FA_TOKEN:
    case ErrorType.NO_ATTEMPTS_LEFT:
    case ErrorType.INVALID_TEMPORARY_CODE:
    case ErrorType.MAINTENANCE:
      return ErrorBehaviorType.UNLOGGED

    case ErrorType.DISALLOWED_REQUEST:
      return ErrorBehaviorType.RELOADABLE

    default:
      return ErrorBehaviorType.USUAL
  }
}

module.exports = { getErrorBehaviorType, ErrorBehaviorType }
