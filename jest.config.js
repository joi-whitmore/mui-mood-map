// jest.config.js
module.exports = {
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest",
    },
    transformIgnorePatterns: [
        "/node_modules/(?!(axios|other-esm-dep)/)", // Transpile ES modules like 'axios' using babel-jest
    ],
};
// In this Jest configuration file, we are using babel-jest to transpile our JavaScript and TypeScript files.
