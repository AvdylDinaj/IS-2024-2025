module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1'
    },
    // Add these new configurations:
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transformIgnorePatterns: [
      'node_modules/(?!(@testing-library|your-esm-packages)/)'
    ],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
        useESM: true
      }
    }
  }