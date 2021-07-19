import { Button } from "../atoms"

const Modal = ({src, closeModal}) => {
	return (
		<div className="modal-outer">
			<div className="modal-inner">
				<Button className="gallery-button" onClick={closeModal}>Zamknij</Button>
				<img src={src} />
			</div>
		</div>
	)
}

export default Modal