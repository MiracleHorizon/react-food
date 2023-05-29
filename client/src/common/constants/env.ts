const MOCK_CLIENT_API: string = 'http://localhost:3000'
const MOCK_SERVER_API: string = 'http://localhost:4200'

export const CLIENT_API: string = process.env.CLIENT_API ?? MOCK_CLIENT_API
export const SERVER_API: string = process.env.SERVER_API ?? MOCK_SERVER_API
