import { describe, expect, test } from '@jest/globals'

import { Routes } from '@router/Routes.enum'
import { RouteStatusHandler } from './RouteStatusHandler'

describe('Тестирование утилиты RouteStatusHandler', () => {
  test('Home', () => {
    const route = Routes.HOME
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isShowcaseRoute()).toBeTruthy()
    expect(routeStatusHandler.isPrivateRoute()).toBeFalsy()
    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  test('Cart', () => {
    const route = Routes.CART
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isShowcaseRoute()).toBeFalsy()
    expect(routeStatusHandler.isPrivateRoute()).toBeFalsy()
    expect(routeStatusHandler.isAuthorizedRoute()).toBeTruthy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  test('Orders', () => {
    const route = Routes.ORDERS
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isShowcaseRoute()).toBeFalsy()
    expect(routeStatusHandler.isPrivateRoute()).toBeFalsy()
    expect(routeStatusHandler.isAuthorizedRoute()).toBeTruthy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  test('Product category', () => {
    const route = `${Routes.CATEGORY}/1` as Routes
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isShowcaseRoute()).toBeTruthy()
    expect(routeStatusHandler.isPrivateRoute()).toBeFalsy()
    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  test('Product category with subcategory', () => {
    const route = `${Routes.CATEGORY}/1?subcategory=2` as Routes
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isShowcaseRoute()).toBeTruthy()
    expect(routeStatusHandler.isPrivateRoute()).toBeFalsy()
    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  test('Signup', () => {
    const route = Routes.SIGNUP
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isShowcaseRoute()).toBeFalsy()
    expect(routeStatusHandler.isPrivateRoute()).toBeFalsy()
    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeTruthy()
  })

  test('Signin', () => {
    const route = Routes.SIGNIN
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isShowcaseRoute()).toBeFalsy()
    expect(routeStatusHandler.isPrivateRoute()).toBeFalsy()
    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeTruthy()
  })

  test('Not found', () => {
    const route = Routes.NOT_FOUND
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isShowcaseRoute()).toBeFalsy()
    expect(routeStatusHandler.isPrivateRoute()).toBeFalsy()
    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  test('Admin dashboard', () => {
    const route = Routes.DASHBOARD
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isShowcaseRoute()).toBeFalsy()
    expect(routeStatusHandler.isPrivateRoute()).toBeTruthy()
    expect(routeStatusHandler.isAuthorizedRoute()).toBeTruthy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  test('Search base', () => {
    const route = Routes.SEARCH
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isShowcaseRoute()).toBeTruthy()
    expect(routeStatusHandler.isPrivateRoute()).toBeFalsy()
    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  test('Search with query', () => {
    const route = `${Routes.SEARCH}?q=манго` as Routes
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isShowcaseRoute()).toBeTruthy()
    expect(routeStatusHandler.isPrivateRoute()).toBeFalsy()
    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })
})
