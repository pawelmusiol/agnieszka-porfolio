import { MenuLink } from "../atoms"

const Menu = ({scrollToPanel}) => {
	return (
		<div className="menu">
			<MenuLink onClick={() => scrollToPanel(0)}>About Me</MenuLink>
			<MenuLink onClick={() => scrollToPanel(1)}>Gallery</MenuLink>
			<MenuLink onClick={() => scrollToPanel(2)}>Offer</MenuLink>
			<MenuLink onClick={() => scrollToPanel(3)}>Contact</MenuLink>
		</div>
	)
}

export default Menu