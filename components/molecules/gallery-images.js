import { useRef, useState, useEffect } from "react"
import { GalleryImageSmall as Image, Button } from "../atoms"
import { Gallery as ImagesList } from "../helpers"

const useGalleryImages = (div, outerDiv, startId, openModal) => {
	let countX = 2
	let countY = 2

	if (div.current) {
		let width = outerDiv.current.offsetWidth
		let height = outerDiv.current.offsetHeight

		if (width > 500) {
			countX = 3
			div.current.style.gridTemplateColumns = "33.3% 33.3% 33.3%"
		}
		if (width > 750) {
			countX = 4
			div.current.style.gridTemplateColumns = "25% 25% 25% 25%"
		}
		if (width > 1000) {
			countX = 5
			div.current.style.gridTemplateColumns = "20% 20% 20% 20% 20%"
		}
		if (width > 1600) {
			countX = 6
			div.current.style.gridTemplateColumns = "16.6% 16.6% 16.6% 16.6% 16.6% 16.6%"
		}

		if (height > 500) {
			countY = 4
			div.current.style.gridTemplateRows = "25% 25% 25% 25%"
		}
		if (height > 750) {
			countY = 5
			div.current.style.gridTemplateRows = "20% 20% 20% 20% 20%"
		}
		if (height > 1000) {
			countY = 6
			div.current.style.gridTemplateRows = "16.6% 16.6% 16.6% 16.6% 16.6% 16.6%"
		}
		if (height > 1600) {
			countY = 7
			div.current.style.gridTemplateRows = "14.29% 14.29% 14.29% 14.29% 14.29% 14.29% 14.29%"
		}

	}
	let GalleryDom = setGallery(countX, countY, startId, openModal)
	console.log(GalleryDom)
	return GalleryDom
}

const setGallery = (columnsCount, rowsCount, startId, openModal) => {
	let ImagesDom = []
	let column = 1
	let row = 1
	ImagesList.map(image => {
		if (row <= rowsCount && image.id >= startId) {
			console.log(row)
			ImagesDom.push(
				<Image
					key={image.id}
					src={"/gallery-small/mini_" + image.name + ".jpg"}
					onClick={() => openModal("/gallery/" + image.name + ".jpg")}
					column={column}
					row={row}
					width={column}
					length={row}
				/>
			)
			column++
			if (column > columnsCount) {
				column = 1
				row++
			}
		}
	})
	return ImagesDom
}

const GalleryImages = ({openModal}) => {
	const ref = useRef()
	const outerRef = useRef()
	const [ImagesDom, setImagesDom] = useState(<></>)
	const [StartId, setStartId] = useState(1)
	
	const setIdStart = (change, direction) => {
		if (StartId - change <= 0 && direction === "minus") {
			setStartId(0)
		}
		else if (direction === "minus") setStartId(StartId - change)
		else if ((StartId + change) > ImagesList.length && direction === "plus") setStartId(StartId)
		else if (direction === "plus") setStartId(StartId + change)
	}

	useEffect(() => {
		setImagesDom(useGalleryImages(ref, outerRef, StartId, openModal))
	}, [ref, StartId])

	return (
		<div ref={outerRef} className="gallery-outer">
			<Button onClick={() => setIdStart(5, "minus")} className="gallery-button" >Mniej!</Button>
			<div className="gallery-images" ref={ref}>
				{ImagesDom}
			</div>
			<Button onClick={() => setIdStart(5, "plus")} className="gallery-button" >Więcej!</Button>
		</div>
	)
}

export default GalleryImages