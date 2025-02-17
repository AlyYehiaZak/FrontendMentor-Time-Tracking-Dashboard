import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Boxes from "./Components/boxes"
import { useState } from "react"

function App() {

  const [selectedTimeFrame , setSelectedTimeFrame] = useState("daily")
  
  const dailyClicked = () =>{
    setSelectedTimeFrame("daily")
  }

  const weeklyClicked = () =>{
    setSelectedTimeFrame("weekly")
  }

  const monthlyClicked = () =>{
    setSelectedTimeFrame("monthly")
  }

  return (
    <>
      <div className="main_section d-lg-flex mt-4 mt-lg-0">
        <div className="container align-content-lg-center">
          <div className="row">

            <div className="col-12 col-lg-3">
              <div className="my-bg-primary rounded-4">
                <div className="user-bg container p-4 pb-5 rounded-4 d-lg-block d-flex">
                  <img className="border border-white border-3 rounded-circle profile_img" src="./images/image-jeremy.png" alt="profile pic" />
                  <div className="ms-4 ms-lg-0">
                    <p className="my-text-secondary myFontFamily300 mt-4 mb-1">Report for</p>
                    <p className="text-white myFontFamily300 fs-1 mb-0">Jeremy</p>
                    <p className="text-white myFontFamily300 fs-1">Robson</p>
                  </div>
                </div>
                <div className="d-flex flex-lg-column justify-content-evenly p-4">
                  <a onClick={dailyClicked} className="mb-lg-3 myFontFamily400"><span className={selectedTimeFrame === "daily" ? "text-white" : "my-text-secondary"}>Daily</span></a>
                  <a onClick={weeklyClicked} className="mb-lg-3 myFontFamily400"><span className={selectedTimeFrame === "weekly" ? "text-white" : "my-text-secondary"}>Weekly</span></a>
                  <a onClick={monthlyClicked} className="mb-lg-2 myFontFamily400"><span className={selectedTimeFrame === "monthly" ? "text-white" : "my-text-secondary"}>Monthly</span></a>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-9 mt-4 mt-lg-0">
              <Boxes selectedTimeFrame={selectedTimeFrame}/>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App