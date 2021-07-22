import { Button } from "../atoms"

const Modal = ({src, closeModal}) => {
	return (
		<div className="modal-outer" id="modal-outer" onClick={(e) => closeOnTouch(e, closeModal)}>
			<div className="modal-inner">
				<Button className="gallery-button" onClick={closeModal}>Close</Button>
				<img src={src} />
			</div>
		</div>
	)
}

const closeOnTouch = (e, closeModal) => {
	if (e.target.id === "modal-outer") {
		closeModal()
	}
}

export default Modal