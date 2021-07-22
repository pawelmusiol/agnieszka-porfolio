import { OfferImage as Image } from "../atoms"

const OfferImages = () => {
	return (
		<div className="offer-images">
			<Image src="/gallery-small/mini_Iydrith2.jpg" type="Full-Body" style="Render" />
			<Image src="/gallery-small/mini_rielldeth2.jpg" type="Half-Body" style="Background" />
			<Image src="/gallery-small/mini_portretChlopaka.jpg" type="Portrait" style="Render" />
		</div>
	)
}

export default OfferImages