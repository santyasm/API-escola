import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model{
	static init(sequelize) {
		super.init(
			{
				filename: {
					type: Sequelize.STRING,
					defaultValue: '',
					allowNull: false,
					validate: {
						notEmpty: {
							msg: 'Campo não pode ser vazio',
						},
					},
				},
				originalname: {
					type: Sequelize.STRING,
					defaultValue: '',
					allowNull: false,
					validate: {
						notEmpty: {
							msg: 'Campo não pode ser vazio',
						},
					},
				},
			},
			{
				sequelize,
				tableName: 'fotos'
			}
		);
		return this;
	}
    
	static associate(models) {
		this.belongsTo(models.Aluno, { foreignKey: 'aluno_id'});
	}
}