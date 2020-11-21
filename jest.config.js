module.exports = {
  name: 'amazon-product',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/data-amazon-product',
  setupFiles: ['./environments/development.js']
};
