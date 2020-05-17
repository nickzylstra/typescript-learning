/* eslint-disable max-len */
module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '**/src/**/*.{js,ts}',
  ],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  // A set of global variables that need to be available in all test environments
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: '<rootDir>/test-utils/globalTestSetup.js',
  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    // "json",
    // 'jsx',
    'ts',
    // "tsx",
    // "node"
  ],
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // setupFilesAfterEnv: ['<rootDir>/test-utils/setupTestFramework.js'],
  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/test/**/*.test.(ts|js)',
  ],
  // The test environment that will be used for testing
  testEnvironment: 'node',
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
