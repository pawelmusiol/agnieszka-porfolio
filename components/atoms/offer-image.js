
const OfferImage = ({src, src2}) => {
	return (
		<div className="offer-image-container">
			<img src={src} className="offer-image" />
			<img src={src2} className="offer-image second" />
		</div>
	)
}

export default OfferImage