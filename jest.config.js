const nextJest = require('next/jest')
const path = require('path')
const getJestMappersFromTSConfig = require('tsconfig-paths-jest-mapper')
const moduleNameMapper = getJestMappersFromTSConfig(
  path.resolve(__dirname, './tsconfig.paths.json')
)

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.afterEnv.js'], // Add more setup options before each test is run
  setupFiles: ['<rootDir>/jest.setup.js'], // Stub native javascript features
  testRegex: ['(/src/.*(test|spec))\\.[jt]sx?$'],
  // testMatch: ['**/*.test.ts?(x)'],
  testTimeout: 80_000,
  moduleNameMapper: {
    ...moduleNameMapper,
  },
}

// taken from https://github.com/vercel/next.js/issues/35634#issuecomment-1080942525
const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)()
  // delete nextJestConfig.testMatch

  // console.log(
  //   '+--------------------------------------------------------> nextJestConfig ',
  //   nextJestConfig
  // )

  return {
    ...nextJestConfig,
    moduleNameMapper: {
      // Workaround to put our SVG stub first
      '\\.svg': '<rootDir>/src/utils/svgr.mock.tsx',
      ...nextJestConfig.moduleNameMapper,
    },
  }
}

module.exports = jestConfig
