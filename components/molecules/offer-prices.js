import { OfferPriceCell as Cell } from "../atoms"

/**
 * @param {[{name: string, price: number}]} pricesArray 
 */

const setPrices = (pricesArray) => {
	let firstRow = []
	let secondRow = []

	for (const PriceData of pricesArray) {
		firstRow.push(
			<tr>
				<th scope="row">{PriceData.name}</th>
				<td>{PriceData.price} $</td>
			</tr>)
	}
	return firstRow
}

const OfferPrices = ({ pricesArray }) => {
	return (
		<table className="offer-prices">
			{setPrices(pricesArray)}
		</table>
	)
}

export default OfferPrices