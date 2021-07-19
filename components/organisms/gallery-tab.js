import { useState } from "react"
import { GalleryImages as Gallery, Modal } from "../molecules"

const GalleryTab = () => {

	const [ModalOpen, setModalOpen] = useState(false)
	const [ModalSrc, setModalSrc] = useState("")

	const OpenModal = (src) => {
		setModalOpen(true)
		setModalSrc(src)
	}

	return (
		<div className="gallery-tab">
			{ModalOpen &&
				<Modal src={ModalSrc} closeModal={() => setModalOpen(false)} />
			}
			<Gallery openModal={OpenModal} />
		</div>
	)
}

export default GalleryTab