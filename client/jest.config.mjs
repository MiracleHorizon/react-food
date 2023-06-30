import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

/** @type {import('jest').Config} */
const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom'
}

export default createJestConfig(jestConfig)
