import Link from "next/link"
import Image from "next/image"

const Icon = ({ src, href, className }) => {
	return (
		<Link href={href} target="_blank">
			<a target="_blank">
				<div className={className}>
					<Image src={src} layout="fill" />
				</div>
			</a>
		</Link>
	)
}

export default Icon