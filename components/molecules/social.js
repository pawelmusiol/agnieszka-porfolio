import { Icon } from "../atoms"

const Social = () => {
	return (
		<div className="social">
			<p>Find Me!</p>
			<div className="icons">
				<Icon src="/social/facebook.svg" href="https://www.facebook.com/LeoreiQueenArt" className="icon" />
				<Icon src="/social/instagram.svg" href="https://www.instagram.com/milvian_art/" className="icon" />
				<Icon src="/social/youtube.svg" href="https://www.youtube.com/" className="icon" />
				<Icon src="/social/patreon.svg" href="https://www.patreon.com/milvian_art_agnieszka_firla" className="icon" />
				<Icon src="/social/discord.svg" href="https://discordapp.com/users/356088057109413889" className="icon" />
			</div>
		</div>
	)
}

export default Social