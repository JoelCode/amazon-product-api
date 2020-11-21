module.exports = {
  name: 'amazon-product',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  setupFiles: ['./environments/development.js']
};
