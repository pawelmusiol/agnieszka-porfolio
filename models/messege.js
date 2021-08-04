import mongoose from 'mongoose'

const messegeSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	mail: String,
	messegeContent: String,
	date: {type:Date, default: Date.now},
})

export default mongoose.models.Messege || mongoose.model('Messege', messegeSchema)