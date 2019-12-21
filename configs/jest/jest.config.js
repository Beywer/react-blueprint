module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
    // Front
    rootDir: '../../',
    moduleDirectories: ['node_modules', '<rootDir>/src'],
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    transform: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/configs/jest/assetsTransform.js',
    },
};
