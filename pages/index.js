import { useState, useRef, useEffect } from "react"
import { SideBar, MainDiv, GalleryTab, Landing, OfferSection, Contact, ContactForm } from "../components/organisms"

const Index = () => {
  const contentRef = useRef()
  const [PositionX, setPositionX] = useState(0)

  const handleScroll = (e) => {
    if (contentRef.current) {
      let width = contentRef.current.childNodes[1].offsetWidth
      console.log(width)
      if (e.deltaY > 0 && (PositionX > -width * 3)) {
        setPositionX(PositionX - width / 10)
        console.log(PositionX)
      }
      else if (e.deltaY < 0 && !(PositionX + width / 10 > 0)) {
        setPositionX(PositionX + width / 10)
      }
      else if (e.deltaY < 0 && !(PositionX + width / 10 < 0)) {
        setPositionX(0)
      }

    }
  }

  const scrollToPanel = (id) => {
    console.log("test")
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
    <div className="" onWheel={(e) => handleScroll(e)}>
      <SideBar scrollToPanel={scrollToPanel} />
      <MainDiv position={-PositionX}>
        <div className="content" ref={contentRef}>
          <div className="pre-panel"></div>
          <Landing />
          <div className="panel" >
            <GalleryTab />
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
