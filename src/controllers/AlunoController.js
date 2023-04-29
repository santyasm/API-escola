import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

export default class AlunoController {
	static async store(req, res) {
		try {
			const newAluno = await Aluno.create(req.body);

			return res.json(newAluno);
		} catch (error) {
			return res.status(400).json({errors: error.errors.map(e => e.message)});
		}
	}

	static async index(req, res) {
		try {
			const alunos = await Aluno.findAll({
				order: [['id', 'desc']], include: {
					model: Foto,
					attributes: ['filename']
				}
			});
			
			return res.json(alunos);
		} catch (error) {
			return res.status(400).json({ errors: [error.message] });
		}
	}

	static async show(req, res) {
		try {
			const { id } = req.params;
			const aluno = await Aluno.findByPk(id);
			if (!aluno) return res.status(401).json({ errors: ['Aluno não existe'] });
			
			return res.json(aluno);
		} catch (error) {
			return res.status(400).json({ errors: [error.message] });
		}
	}

	static async update(req, res) {
		try {
			const { id } = req.params;
			const aluno = await Aluno.findByPk(id);
			if (!aluno) return res.status(401).json({ errors: ['Aluno não existe'] });

			const alunoUpdated = await aluno.update(req.body);

			return res.json(alunoUpdated);
		} catch (error) {
			return res.status(400).json({ errors: error.errors.map(e => e.message)});
		}

	}

	static async delete(req, res) {
		try {
			const { id } = req.params;
			const aluno = await Aluno.findByPk(id);
			if (!aluno) return res.status(401).json({ errors: ['Aluno não existe'] });
			
			await aluno.destroy();

			return res.status(204).json({});
		} catch (error) {
			return res.status(400).json({ errors: [error.message] });
		}
	}
 
}