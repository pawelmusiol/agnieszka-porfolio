import { MenuLink } from "../atoms"

const Menu = ({scrollToPanel}) => {
	return (
		<div className="menu">
			<MenuLink onClick={() => scrollToPanel(0)}>O Mnie</MenuLink>
			<MenuLink onClick={() => scrollToPanel(1)}>Galeria</MenuLink>
			<MenuLink onClick={() => scrollToPanel(2)}>Oferta</MenuLink>
			<MenuLink onClick={() => scrollToPanel(3)}>Kontakt</MenuLink>
		</div>
	)
}

export default Menu