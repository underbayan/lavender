module.exports = {
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
	collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
};
