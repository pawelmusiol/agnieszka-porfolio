import axios from 'axios'
import { useState, useEffect } from "react"
import { MessegeContainter } from "../molecules"

const useMesseges = () => {
	const [Messeges, setMesseges] = useState([]);
	useEffect(() => {
		axios.get("../api/messege").then((response) => {
			setMesseges(response.data)
		})
	}, [])
	return Messeges
}

const MessegeList = () => {
	const Messeges = useMesseges()
	console.log(Messeges)
	const MessegesDom = Messeges.map(Messege => <MessegeContainter messege={Messege} />)

	return (
		<div>
			<h1>Wiadomości</h1>
			<div className="messege-list">
				{MessegesDom}
			</div>
		</div>
	)
}



export default MessegeList