import dbConnect from "../../../utils/dbConnect"
import messege  from "../../../models/messege"

export default async function handler(req, res) {
	const { method, body } = req

	await dbConnect()

	switch (method) {
		case 'GET':
			let messeges = await messege.find({})
			res.send(messeges);
			break;
		case 'POST':
			let validation = validate(body)
			if (validation) messege.create(body)
			res.send({validation: validation});
			break;
	}
}

const validate = (messege) => {
	let validation = true
	for (const [key, value] of Object.entries(messege)) {
		if (value === undefined || value === null || value === "") {
			validation = false
		}	
	}
	return validation
}