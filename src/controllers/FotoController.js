import Foto from '../models/Foto';
import multer from 'multer';
import multerConfig from '../config/multer';
const upload = multer(multerConfig).single('foto');

export default class FotoController {
	static store(req, res) {
		return upload(req, res, async (error) => {
			if (error)
				return res.status(400).json({
					errors: [error.code],
				});

			try {
				const { filename, originalname } = req.file;
				const { aluno_id } = req.body;

				const newFoto = await Foto.create({
					filename,
					originalname,
					aluno_id,
				});
				res.json(newFoto);
			} catch (error) {
				return res.status(400).json({errors: ['Aluno não existe.']});
			}
		});
	}
}

