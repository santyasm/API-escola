import express from 'express';
import homeRoute from './src/routes/homeRoute';
import userRoute from './src/routes/userRoute';
import tokenRoute from './src/routes/tokenRoute';
import alunoRoute from './src//routes/alunoRoute';
import fotoRoute from './src//routes/fotoRoute';

class App{
	constructor() {
		this.app = express();
		this.configureMiddlewares();
		this.configureRoutes();
	}

	configureMiddlewares() {
		this.app.use(express.urlencoded({extended: false}));
		this.app.use(express.json());
		this.app.use(express.static('uploads'));
	}

	configureRoutes() {
		this.app.use('/', homeRoute);
		this.app.use('/', userRoute);
		this.app.use('/', tokenRoute);
		this.app.use('/', alunoRoute);
		this.app.use('/', fotoRoute);
	}
}

export default new App().app;