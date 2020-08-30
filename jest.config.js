module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFilesAfterEnv: [
    './tests/setupJest.ts'
  ],
  collectCoverageFrom: [
    'src/**/*.{!(json),}'
  ],
  transform: {
    '^.*\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!@babel|vuetify)']
}
