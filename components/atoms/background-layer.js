import { useEffect, useState } from "react"

const BackgroundLayer = ({ src, className, position, speed }) => {
	const [Left, setLeft] = useState(0)
	const [Size, setSize] = useState(0)
	let classes = "background-layer "
	if (className) {
		classes += className
	}

	useEffect(() => {
		setLeft(-position * speed)
	}, [position])
	useEffect(() => {
		setSize(window.screen.width)
		console.log(window.screen.width)
	}, [])

	return (
		<div className={classes} style={{ left: Left + "px" }}>
			<img src={"background/" + src} style={{ height: "100%" }} />
			{Size > 786 &&
				<img src={"background/" + src} style={{ height: "100%" }} />
			}
		</div>
	)
}

export default BackgroundLayer