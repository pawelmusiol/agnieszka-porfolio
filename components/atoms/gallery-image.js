
const GalleryImage = ({src, onClick}) => {
	return(
		<div onClick={onClick} className="gallery-image-small" onClick={onClick}>
			
			<div className="image-top" >
				<p className="image-more">
					More
				</p>
			</div>
			<img src={src} />
		</div>
	)
}

export default GalleryImage