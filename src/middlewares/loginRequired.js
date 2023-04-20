import jwt from 'jsonwebtoken';

export default async (req, res, next) => { 
	const { authorization } = req.headers;

	if (!authorization) return res.status(401).json({
		errors: ['Login required']
	});    
    
	const [, token] = authorization.split(' ');
    
	try {
		const dados = jwt.verify(token, process.env.SECRETKEY);
        
		const { id, email } = dados;

		req.userId = id;
		req.dados = dados;
		req.userEmail = email;
        
		return next();

	} catch (error) {
		return res.status(401).json({
			errors: ['Token expirado ou inválido'],
		});    
	}
    
};
