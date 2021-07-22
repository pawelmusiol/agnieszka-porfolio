import { GalleryColumn, GalleryImage } from "../atoms";
import { Gallery as GalleryData } from "../helpers"
import { useState, useEffect, useRef } from "react"

const getWidth = (width) => {
	let columnsCount = 2
	console.log(width)

	if (width > 768) {
		columnsCount = 3
	}
	if (width > 1024) {
		columnsCount = 4
	}
	if (width > 1200) {
		columnsCount = 5
	}

	return columnsCount

}

const useGalleryImages = (Category, GalleryRef, openModal) => {
	const [GalleryDom, setGalleryDom] = useState(<></>);

	useEffect(() => {
		let columnsCount = 2
		if (GalleryRef.current) {
			
			columnsCount = getWidth(GalleryRef.current.offsetWidth)
			console.log(columnsCount)
			let counter = 0
			let images = []
			let columns = []
			for (let i = 0; i < columnsCount; i++) {
				columns.push([])	
			}
			for (const Image of GalleryData) {
				if (Category === 0 || Category === Image.category) {
					columns[counter].push(
						<GalleryImage key={Image.id}
							src={"/gallery-small/mini_" + Image.name + ".jpg"}
							onClick={() => openModal("/gallery-hd/" + Image.name + ".jpg")}
						/>
					)
					if (counter === columnsCount-1) {
						counter = -1
					}
					counter++
				}
			}

			for (let i = 0; i < columnsCount; i++) {
				images.push(
					<GalleryColumn>{columns[i]}</GalleryColumn>
				)
			}
			if (GalleryRef.current.offsetHeight) {
				console.log(GalleryRef.current.offsetHeight)

			}
			setGalleryDom(images)

		}
	}, [Category, GalleryRef]);
	return GalleryDom
}

const GalleryImageList = ({ openModal, Category, setGalleryHeight, position, positionY }) => {
	const GalleryRef = useRef()

	const Images = useGalleryImages(Category, GalleryRef, openModal)

	useEffect(() => {
		setGalleryHeight(GalleryRef.current.offsetHeight)
	}, [Images, GalleryRef, position])

	return (
		<div className="gallery-list" ref={GalleryRef} style={{ top: "calc(3vw + " + positionY + "px)" }}>
			{Images}
		</div>
	)
}

export default GalleryImageList