import "../index.css"
const Sidebar = () => {
    return (
        <div className="container" id="sideBarId">
          <div className="input-group mt-4 ">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Main
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3 mt-5">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Salad
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
  
          <div className="input-group input-group-sm mb-3 mt-5">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Dessert
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="input-group input-group-sm mb-3 mt-5">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Drink
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="d-flex flex-column justify-content-around">
            <p className="mt-3">Do you want to Buy?</p>
            <div className="d-flex flex-row justify-content-around">
              <button className="btn btn-danger">No</button>
              <button className="btn btn-success">Yes</button>
            </div>
          </div>
        </div>
      );
}
export default Sidebar