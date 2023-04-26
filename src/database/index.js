import Sequelize from 'sequelize';
import database from '../config/database';
import User from '../models/User';
import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

const models = [User, Aluno, Foto];

const connection = new Sequelize(database);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));