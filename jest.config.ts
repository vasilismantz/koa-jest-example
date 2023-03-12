export default {
  // moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  // collectCoverage: true,
  // coverageProvider: 'v8',

  // roots: ['<rootDir>/src'],

  // testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  // transform: {
  //   '^.+\\.(ts|tsx)$': 'ts-jest',
  // },

  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  collectCoverage: true,
  collectCoverageFrom: ['**/src/*.{ts,js}', '!**/node_modules/**', '!**/build/**', '!**/coverage/**'],
  transform: {
    '\\.ts$': 'ts-jest',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageReporters: ['text', 'text-summary'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/coverage/'],
};
