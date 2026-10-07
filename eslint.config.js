import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ ignores: ['dist', 'src/routeTree.gen.ts'] },
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			reactHooks.configs.flat['recommended-latest'],
			reactRefresh.configs.vite
		],
		languageOptions: {
			ecmaVersion: 2022,
			globals: globals.browser
		}
	},
	{
		// shadcn/ui files and route files export non-components (variants, Route) by design
		files: ['src/components/ui/**/*.tsx', 'src/routes/**/*.tsx'],
		rules: { 'react-refresh/only-export-components': 'off' }
	},
	prettier
);
