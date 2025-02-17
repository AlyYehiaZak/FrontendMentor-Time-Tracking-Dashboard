import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import data from "./../Data/data.json"

function Boxes({selectedTimeFrame}) {

  return (
    <>
      <div className="row h-100 row-gap-4">

        <div className="col-12 col-lg-4">
            <div className="work_container box_container rounded-4">
                <div className="container_content my-bg-primary rounded-4 h-100 p-4">
                    <div className="d-flex justify-content-between">
                        <p className="text-white myFontFamily500 mb-0">Work</p>
                        <i class="fa-solid fa-ellipsis text-white fs-5 cursor-pointer"></i>
                    </div>
                    <div className="d-flex d-lg-block justify-content-between">
                        <p className="text-white myFontFamily300 mt-2 container_hours mb-1">{data[0].timeframes[selectedTimeFrame].current}hrs</p>
                        <p className="my-text-secondary myFontFamily300 mb-0 align-content-center">Last Week - {data[0].timeframes[selectedTimeFrame].previous}hrs</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-12 col-lg-4">
            <div className="play_container box_container rounded-4">
                <div className="container_content my-bg-primary rounded-4 h-100 p-4">
                    <div className="d-flex justify-content-between">
                        <p className="text-white myFontFamily500 mb-0">Play</p>
                        <i class="fa-solid fa-ellipsis text-white fs-5 cursor-pointer"></i>
                    </div>
                    <div className="d-flex d-lg-block justify-content-between">
                        <p className="text-white myFontFamily300 mt-2 container_hours mb-1">{data[1].timeframes[selectedTimeFrame].current}hrs</p>
                        <p className="my-text-secondary myFontFamily300 mb-0 align-content-center">Last Week - {data[1].timeframes[selectedTimeFrame].previous}hrs</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-12 col-lg-4">
            <div className="study_container box_container rounded-4">
                <div className="container_content my-bg-primary rounded-4 h-100 p-4">
                    <div className="d-flex justify-content-between">
                        <p className="text-white myFontFamily500 mb-0">Study</p>
                        <i class="fa-solid fa-ellipsis text-white fs-5 cursor-pointer"></i>
                    </div>
                    <div className="d-flex d-lg-block justify-content-between">
                        <p className="text-white myFontFamily300 mt-2 container_hours mb-1">{data[2].timeframes[selectedTimeFrame].current}hrs</p>
                        <p className="my-text-secondary myFontFamily300 mb-0 align-content-center">Last Week - {data[2].timeframes[selectedTimeFrame].previous}hrs</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-12 col-lg-4">
            <div className="exercise_container box_container rounded-4">
                <div className="container_content my-bg-primary rounded-4 h-100 p-4">
                    <div className="d-flex justify-content-between">
                        <p className="text-white myFontFamily500 mb-0">Exercise</p>
                        <i class="fa-solid fa-ellipsis text-white fs-5 cursor-pointer"></i>
                    </div>
                    <div className="d-flex d-lg-block justify-content-between">
                        <p className="text-white myFontFamily300 mt-2 container_hours mb-1">{data[3].timeframes[selectedTimeFrame].current}hrs</p>
                        <p className="my-text-secondary myFontFamily300 mb-0 align-content-center">Last Week - {data[3].timeframes[selectedTimeFrame].previous}hrs</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-12 col-lg-4">
            <div className="social_container box_container rounded-4">
                <div className="container_content my-bg-primary rounded-4 h-100 p-4">
                    <div className="d-flex justify-content-between">
                        <p className="text-white myFontFamily500 mb-0">Social</p>
                        <i class="fa-solid fa-ellipsis text-white fs-5 cursor-pointer"></i>
                    </div>
                    <div className="d-flex d-lg-block justify-content-between">
                        <p className="text-white myFontFamily300 mt-2 container_hours mb-1">{data[4].timeframes[selectedTimeFrame].current}hrs</p>
                        <p className="my-text-secondary myFontFamily300 mb-0 align-content-center">Last Week - {data[4].timeframes[selectedTimeFrame].previous}hrs</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-12 col-lg-4">
            <div className="self_container box_container rounded-4">
                <div className="container_content my-bg-primary rounded-4 h-100 p-4">
                    <div className="d-flex justify-content-between">
                        <p className="text-white myFontFamily500 mb-0">Self Care</p>
                        <i class="fa-solid fa-ellipsis text-white fs-5 cursor-pointer"></i>
                    </div>
                    <div className="d-flex d-lg-block justify-content-between">
                        <p className="text-white myFontFamily300 mt-2 container_hours mb-1">{data[5].timeframes[selectedTimeFrame].current}hrs</p>
                        <p className="my-text-secondary myFontFamily300 mb-0 align-content-center">Last Week - {data[5].timeframes[selectedTimeFrame].previous}hrs</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Boxes