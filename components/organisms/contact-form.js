import { useState } from "react"
import { InputLabel, ContactSocial } from "../molecules"
import axios from "axios"

const ContactForm = () => {
	const [FirstName, setFirstName] = useState("");
	const [LastName, setLastName] = useState("");
	const [Mail, setMail] = useState("");
	const [Messege, setMessege] = useState("");

	const sendForm = (e) => {
		e.preventDefault();
		alert(FirstName + " " + LastName + " " + Mail + " " + Messege)
		axios.post("api/messege", {
			firstName: FirstName,
			lastName: LastName,
			mail: Mail,
			messegeContent: Messege
		}).then((response) => {
			console.log(response)
		})
	}

	return (
		<div className="contact-container">
			<div className="form-container">
				<h1>Let Be In Touch!</h1>
				<form className="contact-form">
					<div className="form-row">
						<InputLabel value={FirstName} setValue={setFirstName} label="First Name" />
						<InputLabel value={LastName} setValue={setLastName} label="Last Name" />
					</div>
					<InputLabel value={Mail} setValue={setMail} label="e-mail" />
					<InputLabel value={Messege} setValue={setMessege} label="Messege" textarea />
					<button onClick={(e) => sendForm(e)} className="contact-button">Send It!</button>
				</form>
			</div>
			<ContactSocial />
		</div>
	)
}

export default ContactForm