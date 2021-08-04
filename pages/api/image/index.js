import dbConnect from "../../../utils/dbConnect"
import artwork from "../../../models/artwork"
import multer from "multer"
import sharp from "sharp"

const uploadImage = multer({
	storage: multer.diskStorage({
		destination: './public/gallery-hd',
		filename: (req, file, cb) => cb(null, file.originalname)
	})
})

const resizeImage = async (file) => {
	console.log(file)
	await sharp(file)
		.resize(480, 480)
		.toFile("public/gallery-small/mini_" + file)
}

export default async function handler(req, res) {
	const { method, body, headers } = req

	await dbConnect()

	switch (method) {
		case 'GET':
			let artworks = await artwork.find({})
			console.log(artworks);
			res.send(artworks);
			break;
		case 'POST':
			console.log(req.file)
			uploadImage.single('image')(req, res, async (err) => {
				console.log(req.file)
				let result = await artwork.create({ 
					name: req.file.filename,
					category: headers.Category
				})
				
				console.log(result)
			})
			
			

			res.send({ value: "dupa" });
			break;
	}
}

export const config = {
	api: {
		bodyParser: false,
	},
}