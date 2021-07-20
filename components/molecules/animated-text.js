import { Letter } from "../atoms"

/**
 * @param {string} children 
 */

const Lettering = (children, delay, interval) => {
	let Letters = []
	let key = 0
	for (const letter of children) {
		Letters.push(<Letter key={key} delay={delay}>{letter}</Letter>)
		delay += interval
		key++
	}
	return Letters
}

const AnimatedText = ({ children, className, type, interval, delay }) => {

	const phrase = Lettering(children, delay, interval)
	let returnValue = <></>

	switch (type) {
		case "h1":
			returnValue = <h1 className={className}>{phrase}</h1>
			break;
		case "p":
			returnValue = <p className={className}>{phrase}</p>
			break;
	}
	return (
		<>
			{returnValue}
		</>
	)
}

export default AnimatedText