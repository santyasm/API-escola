import User from '../models/User';

class UserController{
	static async store(req, res) {
		try {
			const newUser = await User.create(req.body);
            
			res.status(201).json(newUser);
		} catch (err) {
			return res.status(400).json({
				errors: err.errors.map(e => e.message)
			});
		}
	}

	static async update(req, res) {
		try {
			const { id } = req.params;
			if(!id) return res.status(400).json('Sem ID na requisição');
            
			const user = await User.findByPk(id);
			if(!user) return res.status(404).json('Usuário não existe');

			const userUpdated = await user.update(req.body);
            
			return res.json(userUpdated);
		} catch (err) {
			return res.status(400).json({
				errors: err.errors.map(e => e.message)
			});
		}
	}
}

export default UserController;