const config = {
	development: {
		dialect: 'sqlite',
		storage: './data/database.sqlite3',
	},
	test: {
		dialect: 'sqlite',
		storage: ':memory',
	},
	production: {
		dialect: 'sqlite',
		storage: './data/database.sqlite3',
	},
};

export default config;
