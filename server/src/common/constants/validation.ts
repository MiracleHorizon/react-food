export const USER_PASSWORD_MIN_LENGTH = 5
export const USER_PASSWORD_MAX_LENGTH = 20
export const USER_PASSWORD_VALIDATION_REGEX = `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{${USER_PASSWORD_MIN_LENGTH},${USER_PASSWORD_MAX_LENGTH}$/`
