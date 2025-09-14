// eslint.config.mjs
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
	js.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname
			}
		},
		// ВАЖНО: плагин объявлен в том же объекте, где rules
		plugins: { '@typescript-eslint': tseslint.plugin },
		rules: {
			'no-unused-vars': [
				'error',
				{
					vars: 'all',
					args: 'after-used',
					caughtErrors: 'all',
					ignoreRestSiblings: true,
					ignoreUsingDeclarations: false,
					reportUsedIgnorePattern: false
				}
			]
		}
	}
]
