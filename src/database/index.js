import Sequelize from 'sequelize';
import database from '../config/database';
import User from '../models/User';
import Aluno from '../models/Aluno';

const models = [User, Aluno];

const connection = new Sequelize(database);

models.forEach(model => model.init(connection));