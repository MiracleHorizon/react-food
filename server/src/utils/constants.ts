export const MOCK_USER_ID = '471e8dac-695b-4f73-8471-cba611b84feb'

export const USER_PASSWORD_MIN_LENGTH = 5
export const USER_PASSWORD_MAX_LENGTH = 20
export const USER_PASSWORD_VALIDATION_REGEX = `^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{${USER_PASSWORD_MIN_LENGTH},${USER_PASSWORD_MAX_LENGTH}$`

export const MIN_PRODUCT_PRICE = 0.01 // В российских рублях.
