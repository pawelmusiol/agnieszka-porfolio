import { useState } from "react"

const setClass = (delay, setClass) => {
	setTimeout(() => {
		setClass("letter letter-visible")
	}, delay)
}

const Letter = ({children, delay}) => {
	const [ClassName, setClassName] = useState("letter letter-none")

	setClass(delay, setClassName)
	
	return(
		<span className={ClassName}>{children}</span>
	)
}

export default Letter