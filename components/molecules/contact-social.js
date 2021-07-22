import { Icon } from "../atoms"

const ContactSocial = () => {
	return (
		<div className="contact-social">
			<div>
				<Icon src="/social/facebook.svg" href="https://www.facebook.com/LeoreiQueenArt" className="contact-icon" />
				<a target="_blank" href="https://www.facebook.com/LeoreiQueenArt" className="icon-text">Facebook</a>
			</div>
			<div>
				<Icon src="/social/instagram.svg" href="https://www.instagram.com/milvian_art/" className="contact-icon" />
				<a target="_blank" href="https://www.instagram.com/milvian_art/" className="icon-text">Instagram</a>
			</div>
			<div>
				<Icon src="/social/youtube.svg" href="https://www.youtube.com/" className="contact-icon" />
				<a target="_blank" href="https://www.youtube.com/" className="icon-text">Youtube</a>
			</div>
			<div>
				<Icon src="/social/patreon.svg" href="https://www.patreon.com/milvian_art_agnieszka_firla" className="contact-icon" />
				<a target="_blank" href="https://www.patreon.com/milvian_art_agnieszka_firla" className="icon-text">Patreon</a>
			</div>
			<div>
				<Icon src="/social/discord.svg" href="https://discordapp.com/users/356088057109413889" className="contact-icon" />
				<a target="_blank" href="https://discordapp.com/users/356088057109413889" className="icon-text">Discord</a>
			</div>
		</div>
	)
}

export default ContactSocial