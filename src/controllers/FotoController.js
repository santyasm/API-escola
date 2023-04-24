import multer from 'multer';

export default class FotoController{
	static store(req, res) {
		res.json(req.file);
	}
}