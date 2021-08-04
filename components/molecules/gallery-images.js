import { useRef, useState, useEffect } from "react"
import { GalleryImageSmall as Image, Button } from "../atoms"
import { Gallery as ImagesList } from "../helpers"

const useGalleryImages = (div, outerDiv, startId, openModal, Category) => {
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
			div.current.style.gridTemplateColumns = "16.67% 16.67% 16.67% 16.67% 16.67% 16.67%"
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
			div.current.style.gridTemplateRows = "16.67% 16.67% 16.67% 16.67% 16.67% 16.67%"
		}
		if (height > 1600) {
			countY = 7
			div.current.style.gridTemplateRows = "14.29% 14.29% 14.29% 14.29% 14.29% 14.29% 14.29%"
		}

	}
	let GalleryDom = setGallery(countX, countY, startId, openModal, Category)
	return [GalleryDom, countX]
}

const setGallery = (columnsCount, rowsCount, startId, openModal, Category) => {
	let ImagesDom = []
	let column = 1
	let row = 1
	ImagesList.map(image => {
		console.log(Category)
		if (row <= rowsCount && image.id >= startId && (Category === 0 || Category === image.category)) {
			console.log(image.name[image.name.length - 5])
			if (image.name[image.name.length - 5] === '.'){
				ImagesDom.push(
					<Image
						key={image.id}
						src={"/gallery-small/mini_" + image.name}
						onClick={() => openModal("/gallery-hd/" + image.name)}
						column={column}
						row={row}
						width={column}
						length={row}
					/>
				)
			}
			else{
			ImagesDom.push(
				<Image
					key={image.id}
					src={"/gallery-small/mini_" + image.name + ".jpg"}
					onClick={() => openModal("/gallery-hd/" + image.name + ".jpg")}
					column={column}
					row={row}
					width={column}
					length={row}
				/>
			)
			}
			column++
			if (column > columnsCount) {
				column = 1
				row++
			}
		}
	})
	return ImagesDom
}

const GalleryImages = ({ openModal, Category }) => {
	const ref = useRef()
	const outerRef = useRef()
	const [ImagesDom, setImagesDom] = useState(<></>)
	const [StartId, setStartId] = useState(1)
	const [ChangeCount, setChangeCount] = useState(1)

	const setIdStart = (change, direction) => {
		if (StartId - change <= 0 && direction === "minus") {
			setStartId(0)
		}
		else if (direction === "minus") setStartId(StartId - change)
		else if ((StartId + change) > ImagesList.length && direction === "plus") setStartId(StartId)
		else if (direction === "plus") setStartId(StartId + change)
	}

	useEffect(() => {
		const [GalleryDom, changeCount] = useGalleryImages(ref, outerRef, StartId, openModal, Category)
		setImagesDom(GalleryDom)
		setChangeCount(changeCount)
	}, [ref, StartId, Category])

	return (
		<div ref={outerRef} className="gallery-outer">
			<Button onClick={() => setIdStart(ChangeCount, "minus")} className="gallery-button" >Back!</Button>
			<div className="gallery-images" ref={ref}>
				{ImagesDom}
			</div>
			<Button onClick={() => setIdStart(ChangeCount, "plus")} className="gallery-button" >More!</Button>
		</div>
	)
}

export default GalleryImages