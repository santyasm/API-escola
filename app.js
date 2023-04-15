import express from 'express';
import homeRoute from './src/routes/homeRoute';
import userRoute from './src/routes/userRoute';


class App{
	constructor() {
		this.app = express();
		this.configureMiddlewares();
		this.configureRoutes();
	}

	configureMiddlewares() {
		this.app.use(express.urlencoded({extended: false}));
		this.app.use(express.json());
	}

	configureRoutes() {
		this.app.use('/', homeRoute);
		this.app.use('/', userRoute);
	}
}

export default new App().app;