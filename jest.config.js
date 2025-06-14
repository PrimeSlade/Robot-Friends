export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  moduleNameMapper: {
    // Mock all CSS imports
    "\\.(css|scss|sass|less)$": "<rootDir>/test/__mocks__/styleMock.ts",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  testMatch: ["**/test/**/*.test.[jt]s?(x)", "**/__tests__/**/*.[jt]s?(x)"],
  verbose: true,
  watchPathIgnorePatterns: ["node_modules", "dist", "build"],
  // Add TypeScript support
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
