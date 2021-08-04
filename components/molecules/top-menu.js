import { MenuLink as Link } from "../atoms"
import { useRouter } from "next/router"

const usePre = () => {
	let router = useRouter()
	let path = router.asPath
	let pre = "/"
	let routeLength = path.split("/").length

	if (routeLength === 3) {
		pre = "../"
	}

	return pre
}

const TopMenu = () => {
	let pre = usePre()
	
	return (
		<nav className="admin-menu">
			<Link href={`${pre}admin/site`}>Strony</Link>
			<Link href={`${pre}admin/image`}>Obrazy</Link>
			<Link href={`${pre}admin/messege`}>Wiadomości</Link>
		</nav>
	)
}

export default TopMenu