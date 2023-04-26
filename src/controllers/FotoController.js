import multer from 'multer';
import multerConfig from '../config/multer';
const upload = multer(multerConfig).single('foto');

export default class FotoController{
	static store(req, res) {
		return upload(req, res, async (error) => {
			if (error) return res.status(400).json({
				errors: [error.code]
			});
			res.json(req.file);
		});
	}
}