import { ImageAdmin as Image } from "../molecules"
import { useState, useEffect } from "react"
import axios from "axios"

const useImages = () => {
	const [Images, setImages] = useState([])

	useEffect(() => {
		axios.get('../api/image').then((response) => {
			console.log(response.data)
			setImages(setImagesDom(response.data))
		})
	}, [])

	return Images
}

/**
 * @param {[{ _id: Number, name: String, category: Number}]} ImagesData
 */

const setImagesDom = (ImagesData) => {
	return ImagesData.map(image => {
		if (image.name[image.name.length - 3] === 'j') {
			return <Image title={image.name} src={"/gallery-small/mini_" + image.name} />
		}
		else return <Image title={image.name} src={"/gallery-small/mini_" + image.name + ".jpg"} />
	})
}

const AdminImageList = () => {
	const Images = useImages()
	console.log(Images)
	return (
		<div className="images-container">
			{Images}
		</div>
	)
}
export default AdminImageList