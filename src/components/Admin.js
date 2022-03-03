import { Link } from "react-router-dom";
import "../styles/admin.css";
const Admin = () => {
  return (
    <div className="container card-0 justify-content-center ">
      <div className="card-body px-sm-4 px-0">
        <div className="row justify-content-center mb-5">
          <div className="col-md-10 col">
            <h3 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left">
              {" "}
              Add a new game{" "}
            </h3>
            <p className="mt-md-4 ml-md-0 ml-2 text-center text-sm-left">
              {" "}
              Enter the info of the game u wish to add
            </p>
          </div>
        </div>
        <div className="row justify-content-center round">
          <div className="col-lg-10 col-md-12 ">
            <div className="card shadow-lg card-1">
              <div className="card-body inner-card">
                <div className="row justify-content-center">
                  <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="title">Game Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Type the name of the game"
                      />{" "}
                    </div>

                    <div className="form-group">
                      {" "}
                      <label htmlFor="time">Game realese date</label>{" "}
                      <input type="text" className="form-control" id="time" />{" "}
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="form-group">
                      {" "}
                      <label htmlFor="rating">IGDB rating</label>{" "}
                      <input
                        type="number"
                        className="form-control"
                        id="last-name"
                      />{" "}
                    </div>

                    <div className="form-group">
                      {" "}
                      <label htmlFor="inputEmail4">Game Categories</label>{" "}
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Select Categories
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <div className="d-flex  flex-column justify-content-center">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                name="category"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                Fighting
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                name="category"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Action
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                name="category"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Shooter
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                name="category"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Racing
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                name="category"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                RTS
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                name="category"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                RPG
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12 col-lg-10 col-12">
                    <div className="form-group files">
                      <label className="my-auto">Upload cover image </label>{" "}
                      <input id="file" type="file" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12 col-lg-10 col-12">
                    <div className="form-group">
                      {" "}
                      <label htmlFor="exampleFormControlTextarea2">
                        Game description
                      </label>{" "}
                      <textarea
                        className="form-control rounded-0"
                        id="exampleFormControlTextarea2"
                        rows={5}
                        defaultValue={""}
                      />
                    </div>
                    <div className="mb-2 mt-4">
                      <div className="text-right">
                        <button
                          type="button"
                          className="btn btn-primary btn-block"
                        >
                          <small className="font-weight-bold">Add</small>
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
