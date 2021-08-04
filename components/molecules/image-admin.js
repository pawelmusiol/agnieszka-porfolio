const ImageAdmin = ({title, src}) => {
	return(
		<div className="admin-image-container">
			<p className="top">{title}</p>
			<p className="bottom">{title}</p>
			<img src={src} />
		</div>
	)
}
export default ImageAdmin