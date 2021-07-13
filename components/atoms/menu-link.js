import Link from "next/link"

const MenuLink = ({href, children}) => {
	return(
		<Link href={href}>{children}</Link>
	)
}

export default MenuLink