import Link from "next/link"

const MenuLink = ({href, children, onClick}) => {
	
	return(
		<>
		{href ?
			<Link href={href}>
				<a onClick={onClick} className="link">{children}</a>
			</Link>
			:
			<a onClick={onClick} className="link">{children}</a>
		}
		</>
		
	)
}

export default MenuLink