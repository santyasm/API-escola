import Sequelize, {Model} from 'sequelize';

export default class Aluno extends Model{
	static init(sequelize) {
		super.init(
			{
				nome: {
					type: Sequelize.STRING,
					defaultValue: '',
					validate: {
						len: {
							args: [3, 255],
							msg: 'Nome deve conter entre 3 a 255 caracteres'
						}
					}
				},
				sobrenome: {
					type: Sequelize.STRING,
					defaultValue: '',
					validate: {
						len: {
							args: [3, 255],
							msg: 'Sobrenome deve conter entre 3 a 255 caracteres'
						}
					}
				},
				email: {
					type: Sequelize.STRING,
					defaultValue: '',
					unique: {
						msg: 'Email já sendo ultilizado'
					},
					validate: {
						isEmail: {
							msg: 'Email inválido'
						}
					}
				},
				idade: Sequelize.INTEGER,
				peso: Sequelize.FLOAT,
				altura: Sequelize.FLOAT,

			}, {sequelize});
		return this;
	}
}