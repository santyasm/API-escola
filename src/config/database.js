require('dotenv').config();

module.exports = {
	dialect: 'mysql',
	database: process.env.DATABASE,
	host: process.env.DATABASE_HOST,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
		'createdAt': 'created_at',
		'updatedAt': 'updated_at'
	},
	dialectOptions: {	
		timezone: 'America/Sao_Paulo',
	},
	timezone: 'America/Sao_Paulo',
};