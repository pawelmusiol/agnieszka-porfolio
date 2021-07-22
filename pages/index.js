import { useState, useRef, useEffect } from "react"
import { SideBar, MainDiv, GalleryTab, Landing, OfferSection, Contact, ContactForm } from "../components/organisms"

const Index = () => {
  const contentRef = useRef()
  const [PositionX, setPositionX] = useState(0)
  const [GalleryHeight, setGalleryHeight] = useState(0)
  const [GalleryPositionY, setGalleryPositionY] = useState(0)
  const [Extrem, setExtrem] = useState(true)

  const handleScroll = (e) => {
    if (contentRef.current) {
      let width = contentRef.current.childNodes[1].offsetWidth
      let height = contentRef.current.childNodes[1].offsetHeight
      if (PositionX === -width) {
        handleGalleryScroll(e, width, height)
      }
      else if (e.deltaY > 0 && (PositionX > -width * 3)) {
        setPositionX(PositionX - width / 10)

      }
      else if (e.deltaY < 0 && !(PositionX + width / 10 > 0)) {
        setPositionX(PositionX + width / 10)
      }
      else if (e.deltaY < 0 && !(PositionX + width / 10 < 0)) {
        setPositionX(0)
      }
      
    }
  }

  const handleGalleryScroll = (e, width, height) => {
    let timeout = 0
    if (Extrem) {
      timeout = 200
    }
    setTimeout(() => {
    if (e.deltaY > 0 && GalleryPositionY === -GalleryHeight + height ) {

      setPositionX(PositionX - width / 10)
      setExtrem(true)
    }

    else if (e.deltaY > 0 ) {
      setExtrem(false)
      setGalleryPositionY( GalleryPositionY - GalleryHeight/ 20)
    }
    else if (e.deltaY < 0 && GalleryPositionY === 0) {
      setExtrem(true)
      setPositionX(PositionX + width / 10)
    }
    else if(e.deltaY < 0){
      setExtrem(false)
      setGalleryPositionY( GalleryPositionY + GalleryHeight/ 20)
    }
    if (GalleryPositionY > 0 ) {
      setGalleryPositionY(0)
    }
    if (GalleryPositionY < -GalleryHeight + height) {

      setGalleryPositionY(-GalleryHeight + height)
    }
  }, timeout)
  }

  const scrollToPanel = (id) => {

    if (contentRef.current) {
      let width = contentRef.current.childNodes[1].offsetWidth
      setPositionX(-width * id)
    }
  }

  useEffect(() => {
    let div = contentRef.current
    div.style.left = PositionX + "px";
  }, [PositionX])

  return (
    <div className="main" onWheel={(e) => handleScroll(e)}>
      <SideBar scrollToPanel={scrollToPanel} />
      <MainDiv position={-PositionX}>
        <div className="content" ref={contentRef}>
          <div className="pre-panel"></div>
          <Landing />
          <div className="panel" >
            <GalleryTab setGalleryHeight={setGalleryHeight} position={PositionX} positionY={GalleryPositionY} />
          </div>
          <OfferSection />
          <Contact>
            <ContactForm />
          </Contact>
        </div>
      </MainDiv>
    </div>
  )
}
export default Index
