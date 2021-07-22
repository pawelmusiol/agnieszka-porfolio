
const GalleryCategory = ({setCategory}) => {
	return(
		<div className="gallery-category">
			<button onClick={() => setCategory(0)} >Wszystko</button>
			<button onClick={() => setCategory(1)} >kategoria 1</button>
			<button onClick={() => setCategory(2)} >kategoria 2</button>
			<button onClick={() => setCategory(3)} >kategoria 3</button>
			<button onClick={() => setCategory(4)} >kategoria 4</button>
		</div>
	)
}

export default GalleryCategory