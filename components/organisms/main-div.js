import { MainBackground } from "../molecules";

const MainDiv = ({children, position}) => {
	return(
		<div className="outer-content" >
			<MainBackground position={position} />
			{children}
		</div>
	)
}

export default MainDiv;