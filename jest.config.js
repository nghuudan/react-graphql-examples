module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', '\\.(graphql|gql)$'],
  roots: ['<rootDir>/src/'],
  setupFiles: ['./jest.setup.js'],
  transform: {
    '\\.(graphql|gql)$': 'jest-transform-graphql',
    '.*': 'babel-jest'
  }
};
