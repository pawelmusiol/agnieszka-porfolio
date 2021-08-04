import mongoose from 'mongoose'

const artworkSchema = new mongoose.Schema({
	name: String,
	category: Number
})

export default mongoose.models.Artwork || mongoose.model('Artwork', artworkSchema)