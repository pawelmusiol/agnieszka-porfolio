import { OfferPrices, OfferText } from "../molecules"

const PortraitPrices = [
	{
		name: "line art",
		price: 15
	},
	{
		name: "flat color",
		price: 18
	},
	{
		name: "shading",
		price: 20
	},
	{
		name: "full render",
		price: 30
	},
	{
		name: "background",
		price: 45
	},
]

const HalfBodyPrices = [
	{
		name: "line art",
		price: 18
	},
	{
		name: "flat color",
		price: 30
	},
	{
		name: "shading",
		price: 40
	},
	{
		name: "full render",
		price: 50
	},
	{
		name: "background",
		price: 65
	},
]

const FullBodyPrices = [
	{
		name: "line art",
		price: 20
	},
	{
		name: "flat color",
		price: 35
	},
	{
		name: "shading",
		price: 50
	},
	{
		name: "full render",
		price: 70
	},
	{
		name: "background",
		price: 85
	},
]

const OfferSection = () => {
	return (
		<div className="panel offer" >
			<div className="offer-section">
				<OfferText src="/gallery-small/mini_portretChlopaka.jpg" src2="/gallery-small/mini_nivye2.jpg">
					<h2>Portrait</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin sit amet ante vel vehicula. Proin id erat magna. Nullam sit amet arcu efficitur, interdum mi eu, tempor quam. Nullam.</p>
				</OfferText>
				<OfferPrices pricesArray={PortraitPrices} />
			</div>
			<div className="offer-section">
				<OfferText src="/gallery-small/mini_szkic2.jpg" src2="/gallery-small/mini_mrokNocyZBlaskiemKsiezyca2.jpg">
					<h2>Half Body</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin sit amet ante vel vehicula. Proin id erat magna. Nullam sit amet arcu efficitur, interdum mi eu, tempor quam. Nullam.</p>
				</OfferText>
				<OfferPrices pricesArray={HalfBodyPrices} />
			</div>
			<div className="offer-section">
				<OfferText src="/gallery-small/mini_Iydrith2.jpg" src2="/gallery-small/mini_laurielleSukienka2.jpg">
					<h2>Full Body</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin sit amet ante vel vehicula. Proin id erat magna. Nullam sit amet arcu efficitur, interdum mi eu, tempor quam. Nullam.</p>
				</OfferText>
				<OfferPrices pricesArray={FullBodyPrices} />
			</div>
			<div className="offer-section">
				<OfferText src="/gallery-small/mini_landscape6A.jpg" src2="/gallery-small/mini_hydraFight.jpg">
					<h2>Illustrations</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin sit amet ante vel vehicula. Proin id erat magna. Nullam sit amet arcu efficitur, interdum mi eu, tempor quam. Nullam.</p>
				</OfferText>
				<div style={{maxWidth: "20%"}}>
					Every Illustration is priced individually from $100 to $250.
				</div>
			</div>
		</div>
	)
}

export default OfferSection