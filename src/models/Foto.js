import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model{
	static init(sequelize) {
		super.init({

		}, { sequelize });
		return this;
	}
}