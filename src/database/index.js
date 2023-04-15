import Sequelize from 'sequelize';
import database from '../config/database';
import User from '../models/User';

const models = [User];

const connection = new Sequelize(database);

models.forEach(model => model.init(connection));