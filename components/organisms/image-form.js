import axios from "axios"
import { useState } from "react"

const sendImage = (e, Image, Category) => {
	e.preventDefault();
	console.log(Image)
	const data = new FormData()
	data.append('image', Image)
	console.log(data)
	axios.post("/api/image", data,{
		headers:{
			Category: Category
		}
	}).then((response) => {
		console.log(response)
	})
		.catch((err) => {
			console.log(err)
		})
}

const ImageForm = () => {
	const [Image, setImage] = useState(null);
	const [Category, setCategory] = useState("1")

	const handleCategory = (e) => {
		console.log(e.target)
		setCategory(e.target.value)
	}
	return (
		<form>
			<input
				type="file"
				name="image"
				accept="image/png image/jpeg"
				onChange={(e) => setImage(e.target.files[0])} />
			<select name="category" onChange={(e) => handleCategory(e)} value={Category}>
				<option value="1">Kategoria 1</option>
				<option value="2">Kategoria 2</option>
				<option value="3">Kategoria 3</option>
				<option value="4">Kategoria 4</option>
				<option value="5">Kategoria 5</option>
			</select>
			<input type="submit" onClick={(e) => sendImage(e, Image, Category)} />
		</form>
	)
}
export default ImageForm