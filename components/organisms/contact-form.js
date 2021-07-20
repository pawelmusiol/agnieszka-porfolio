import { useState } from "react"
import { InputLabel, ContactSocial } from "../molecules"

const ContactForm = () => {
	const [Name, setName] = useState("");
	const [LastName, setLastName] = useState("");
	const [Mail, setMail] = useState("");
	const [Messege, setMessege] = useState("");

	const sendForm = (e) => {
		e.preventDefault();
		alert(Name + " " + LastName + " " + Mail + " " + Messege)
	}

	return (
		<div className="contact-container">
			<div className="form-container">
				<h1>Let Be In Touch!</h1>
				<form className="contact-form">
					<div className="form-row">
						<InputLabel value={Name} setValue={setName} label="First Name" />
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