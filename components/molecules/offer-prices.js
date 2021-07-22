import { OfferPriceCell as Cell } from "../atoms"

/**
 * @param {[{name: string, portrait: number, halfbody: number, fullbody: number}]} pricesArray 
 */

const setPrices = (pricesArray) => {
	let TableData = [[], [], [], []]

	for (const PriceData of pricesArray) {
		TableData[0].push(<th >{PriceData.name}</th>)
		TableData[1].push(<td className="table-price">$ {PriceData.portrait} </td>)
		TableData[2].push(<td className="table-price">$ {PriceData.halfbody} </td>)
		TableData[3].push(<td className="table-price">$ {PriceData.fullbody} </td>)
		
	}

	return (
		<>
		<tr><td></td>{TableData[0]}</tr>
		<tr><td>Portrait</td>{TableData[1]}</tr>
		<tr><td>Half Body</td>{TableData[2]}</tr>
		<tr><td>Full Body</td>{TableData[3]}</tr>
		</>
		)
}

const OfferPrices = ({ pricesArray }) => {
	return (
		<div className="offer-prices-container">
		<table className="offer-prices">
			{setPrices(pricesArray)}
		</table>
		<p>* Illustrations Priced Individually $100 - $300</p>
		</div>
	)
}

export default OfferPrices