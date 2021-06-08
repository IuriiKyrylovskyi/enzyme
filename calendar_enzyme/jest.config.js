module.exports = {
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["./jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "./node_modules/babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
};
