
const GalleryCategory = ({setCategory}) => {
	return(
		<div className="gallery-category">
			<button onClick={() => setCategory(0)} >Wszystko</button>
			<button onClick={() => setCategory(1)} >Portraits</button>
			<button onClick={() => setCategory(2)} >Characters Design</button>
			<button onClick={() => setCategory(3)} >Illustrations</button>
			<button onClick={() => setCategory(4)} >Concept Arts</button>
		</div>
	)
}

export default GalleryCategory