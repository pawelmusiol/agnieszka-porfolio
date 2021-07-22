
const OfferImage = ({ src, type, style }) => {
	return (
		<div className="offer-image-container">
			<div className="offer-image-box">
				<img src={src} className="offer-image" />
			</div>
			<div className="image-text">
				<p>{type}</p>
				<p>{style}</p>
			</div>
		</div>
	)
}

export default OfferImage