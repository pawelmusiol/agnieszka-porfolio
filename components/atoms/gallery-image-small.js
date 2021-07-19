import Image from "next/image"

const useStyle = (column, row, width, length) => {
	let style = {}
	style.gridArea = row + "/" + column + "/" + length + "/" + width
	return style
}

const GalleryImageSmall = ({ src, column, row, width, length, id, className, onClick }) => {

	let Classes = "gallery-image-small "
	if (className) {
		Classes += className
	}

	const style = useStyle(column, row, width, length)

	return (
		<div className={Classes} style = {style} onClick={onClick}>
			<img src={src} />
		</div>
	)
}

export default GalleryImageSmall