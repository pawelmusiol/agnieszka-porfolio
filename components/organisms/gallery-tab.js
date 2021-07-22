import { useState } from "react"
import { GalleryImages as Gallery, Modal, GalleryCategory, GalleryList } from "../molecules"

const GalleryTab = ({ setGalleryHeight, position, positionY }) => {

	const [ModalOpen, setModalOpen] = useState(false)
	const [ModalSrc, setModalSrc] = useState("")
	const [Category, setCategory] = useState(0)

	const OpenModal = (src) => {
		setModalOpen(true)
		setModalSrc(src)
	}

	return (
		<div className="gallery-tab">
			{ModalOpen &&
				<Modal src={ModalSrc} closeModal={() => setModalOpen(false)} />
			}
			<GalleryCategory setCategory={setCategory} />
			<GalleryList openModal={OpenModal} Category={Category} setGalleryHeight={setGalleryHeight} position={position} positionY={positionY} />

			{/*<Gallery openModal={OpenModal} Category={Category} />*/}
		</div>
	)
}

export default GalleryTab