import { OfferImage as Image } from "../atoms"

const OfferSection = ({ src, src2, children }) => {
	return (
		<>
			<Image src={src} src2={src2} />
			<div className="offer-section-text">
				{children}
			</div>
		</>
	)
}

export default OfferSection