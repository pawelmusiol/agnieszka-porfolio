import { MessegeCell as Cell } from "../atoms"

const setDate = (date) => {
	let messegeDate = new Date(date)
	console.log(messegeDate.getDay())
	return `${messegeDate.getHours()}:${messegeDate.getMinutes()} ${messegeDate.getDay()}.${messegeDate.getMonth()}.${messegeDate.getFullYear()} `
}

const MessegeContainter = ({ messege }) => {
	return (
		<div className="messege-container">
			<Cell className="smaller">{setDate(messege.date)}</Cell>
			<div className="messege-personal">
				<div className="messege-name">
					<Cell>{messege.firstName}</Cell>
					<Cell>{messege.lastName}</Cell>
				</div>
				<Cell>{messege.mail}</Cell>
			</div>
			<Cell className="smaller messege-content">{messege.messegeContent}</Cell>
		</div>
	)
}
export default MessegeContainter