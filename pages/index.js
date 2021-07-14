import { useState, useRef, useEffect } from "react"
import { SideBar, MainDiv } from "../components/organisms"

const Index = () => {
  const contentRef = useRef()
  const [PositionX, setPositionX] = useState(0)

  const handleScroll = (e) => {
    if (contentRef.current) {
      let width = contentRef.current.childNodes[1].offsetWidth
      console.log(width)
      if (e.deltaY > 0 && (PositionX > -width * 2)) {
        setPositionX(PositionX - width / 10)
        console.log(PositionX)
      }
      else if (e.deltaY < 0 && !(PositionX + width / 10 > 0)) {
        setPositionX(PositionX + width / 10)
      }

    }
  }
  useEffect(() => {
    let div = contentRef.current
    div.style.left = PositionX + "px";
  }, [PositionX])

  return (
    <div className="" onWheel={(e) => handleScroll(e)}>
      <SideBar />
      <MainDiv position={-PositionX}>
        <div className="content" ref={contentRef}>
          <div className="pre-panel"></div>
          <div className="panel" >a</div>
          <div className="panel" >test</div>
          <div className="panel contact" >test</div>
        </div>
      </MainDiv>
    </div>
  )
}
export default Index
