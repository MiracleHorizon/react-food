import { Routes } from './routes.enum'

export const privateRoutes = [Routes.DASHBOARD]
export const authorizedRoutes = [Routes.ORDERS, Routes.CART]
export const unauthorizedRoutes = [Routes.SIGNUP, Routes.SIGNIN]
