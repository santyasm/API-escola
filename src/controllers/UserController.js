import User from '../models/User';

export default class UserController {
	static async store(req, res) {
		try {
			const newUser = await User.create(req.body);

			res.status(201).json(newUser);
		} catch (err) {
			return res.status(400).json({
				errors: err.errors.map((e) => e.message),
			});
		}
	}

	static async update(req, res) {
		try {
			const { id } = req.params;

			const user = await User.findByPk(id);
			if (!user) return res.status(404).json('Usuário não existe');

			const userUpdated = await user.update(req.body);

			return res.json(userUpdated);
		} catch (err) {
			return res.status(400).json({
				errors: err.errors.map((e) => e.message),
			});
		}
	}

	static async delete(req, res) {
		try {
			const { id } = req.params;

			const user = await User.findByPk(id);
			if(!user) return res.status(404).json('Usuário não existe');

			await user.destroy();
            
			return res.status(204).json({});
		} catch (err) {
			return res.status(400).json({
				errors: err.errors.map((e) => e.message),
			});
		}
	}
}