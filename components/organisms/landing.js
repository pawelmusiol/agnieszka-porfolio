import { AnimatedText } from "../molecules"

const Landing = () => {
	return (
		<div className="panel landing">
			<div className="name">
				<AnimatedText className="name-text" type="h1" delay={1000} interval={100}>Agnieszka Firla</AnimatedText>
				<AnimatedText className="bottom-text" type="p" delay={2500} interval={50}>Freelance Artist</AnimatedText>
			</div>
			<div className="specs">
				<h2>Portraits</h2>
				<h2>Ilustrations</h2>
				<h2>Concept Arts</h2>
				<h2>Character Design</h2>
			</div>
		</div>
	)
}

export default Landing