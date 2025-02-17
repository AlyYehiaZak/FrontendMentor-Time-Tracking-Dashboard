import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <>
      <div className="main_section d-lg-flex">
        <div className="container align-content-lg-center">
          <div className="row">

            <div className="col-12 col-lg-3">
              <div className="my-bg-primary rounded-4">
                <div className="user-bg container p-4 pb-5 rounded-4">
                  <img className="border border-white border-3 rounded-circle" style={{ width: "90px"}} src="./images/image-jeremy.png" alt="profile pic" />
                  <p className="my-text-secondary myFontFamily300 mt-4 mb-1">Report for</p>
                  <p className="text-white myFontFamily300 fs-1 mb-0">Jeremy</p>
                  <p className="text-white myFontFamily300 fs-1">Robson</p>
                </div>
                <div className="d-flex flex-column p-4">
                  <a className="my-text-secondary mb-3 myFontFamily400">Daily</a>
                  <a className="my-text-secondary mb-3 myFontFamily400">Weekly</a>
                  <a className="my-text-secondary mb-2 myFontFamily400">Monthly</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-9">
              
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App