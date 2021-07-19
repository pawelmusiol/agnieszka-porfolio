import {Logo, Menu, Social} from "../molecules"

const SideBar = ({scrollToPanel}) => {
	return(
		<div className="side-bar">
			<Logo />
			<Menu scrollToPanel={scrollToPanel} />
			<Social />
		</div>
	)
}

export default SideBar