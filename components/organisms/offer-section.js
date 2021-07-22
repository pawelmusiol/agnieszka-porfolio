import { OfferPrices, OfferImages } from "../molecules"

const Prices = [
	{
		name: "line art",
		portrait: 15,
		halfbody: 18,
		fullbody: 20,
	},
	{
		name: "flat color",
		portrait: 18,
		halfbody: 30,
		fullbody: 35,
	},
	{
		name: "shading",
		portrait: 20,
		halfbody: 40,
		fullbody: 50,
	},
	{
		name: "full render",
		portrait: 30,
		halfbody: 50,
		fullbody: 70,
	},
	{
		name: "background",
		portrait: 45,
		halfbody: 65,
		fullbody: 85,
	},
]

const OfferSection = () => {
	return (
		<div className="panel offer" >
			<h1>Need Commision?</h1>
			<OfferPrices pricesArray={Prices} />
			<OfferImages />
			<h1>Bring Your Character To Life</h1>
		</div>
	)
}

export default OfferSection