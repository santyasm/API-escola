import User from '../models/User';
import jwt from 'jsonwebtoken';

export default class TokenController{
	static async store(req, res) {
		const { email, password} = req.body; 
		if (!email || !password) return res.status(400).json({ errors: ['Credenciais inválidas!'] });
        
		const user = await User.findOne({ where: { email: email } });
		if (!user) return res.status(404).json({errors: ['Usuário não existe']});

		const compare = await user.passwordIsValid(password);
		if (!compare) return res.status(401).json({ errors: ['Senha inválida.'] });

		const { id } = user;
		const token = await jwt.sign(
			{ email, id },
			process.env.SECRETKEY,
			{ expiresIn: process.env.TOKEN_EXPIRATION }
		);
        
		return res.json({token});
	}
}
