import { useState, useCallback } from 'react'
import { BackgroundLayer } from "../atoms"

const MainBackground = ({ position }) => {
	const [Sufix, setSufix] = useState("")

	const WidthRef = useCallback(node =>{
			if (node !== null) {
				if (node.offsetWidth > 780) {
					setSufix(`.png`)
				}
				else setSufix(`-phone.png`)
			}
	},[])
	
	


	return (
		<div className="main-background" ref={WidthRef}>
			<BackgroundLayer src="bg.png" className="layer-1" position={position} speed={0.1} />
			<BackgroundLayer src={`sun${Sufix}`} className="layer-2" position={position} speed={0.2} />
			<BackgroundLayer src="mountains1.png" className="layer-3" position={position} speed={0.3} />
			<BackgroundLayer src="mountains2.png" className="layer-4" position={position} speed={0.4} />
			<BackgroundLayer src="mountains3.png" className="layer-5" position={position} speed={0.5} />
			<BackgroundLayer src="mountains4.png" className="layer-6" position={position} speed={0.6} />
			<BackgroundLayer src="trees1.png" className="layer-7" position={position} speed={0.7} />
			<BackgroundLayer src="trees2.png" className="layer-8" position={position} speed={0.8} />
			<BackgroundLayer src="clouds.png" className="layer-9" position={position} speed={0.9} />
			<BackgroundLayer src={`birds${Sufix}`} className="layer-10" position={position} speed={1.2} />
			<BackgroundLayer src="lake.png" className="layer-11" position={position} speed={0} />
		</div>
	)
}

export default MainBackground