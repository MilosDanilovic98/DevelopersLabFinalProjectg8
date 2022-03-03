import React, { useRef, useState } from "react";

function Slider() {
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalRating, setModalRating] = useState("");
  const [modalDate, setModalDate] = useState("");
  const [modalImage, setModalImage] = useState("");

  const openModal = (e) => {
    var button = e.target;
    setModalTitle(button.getAttribute("data-bs-title"));
    setModalDescription(button.getAttribute("data-bs-description"));
    setModalRating(button.getAttribute("data-bs-rating"));
    setModalDate(button.getAttribute("data-bs-date"));
    setModalImage(button.getAttribute("data-bs-image"));
  };

  const slideItems = [
    {
      title: "Crash Team Racing Nitro-Fueled",
      description:
        "Crash Team Racing Nitro-Fueled is a kart racing game developed by Beenox and published by Activision. It is a remaster of Crash Team Racing, which was originally developed by Naughty Dog for the PlayStation.",
      realise_date: "2019-06-21",
      image: "https://i.ibb.co/LxMZRV3/ctr.png",
      IGDB_rating: "8.4",
      category: [28, 29],
      status: "RECENTLY ADDED",
      views_count: 0,
    },
    {
      title: "Marvel's Spider-Man",
      description:
        "Starring the world's most iconic Super Hero, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and utilizing the environment, to new combat and blockbuster set pieces, it's Spider-Man unlike any you've played before.",
      realise_date: "2018-09-07",
      image: "https://i.ibb.co/TBdxmkK/MSM.png",
      IGDB_rating: "8.7",
      category: [34, 39],
      status: "RECENTLY ADDED",
      views_count: 0,
    },
    {
      title: "Crash Team Racing Nitro-Fueled",
      description:
        "Crash Team Racing Nitro-Fueled is a kart racing game developed by Beenox and published by Activision. It is a remaster of Crash Team Racing, which was originally developed by Naughty Dog for the PlayStation.",
      realise_date: "2019-06-21",
      image: "https://i.ibb.co/LxMZRV3/ctr.png",
      IGDB_rating: "8.4",
      category: [28, 29],
      status: "RECENTLY ADDED",
      views_count: 0,
    },
    {
      title: "Crash Team Racing Nitro-Fueled",
      description:
        "Crash Team Racing Nitro-Fueled is a kart racing game developed by Beenox and published by Activision. It is a remaster of Crash Team Racing, which was originally developed by Naughty Dog for the PlayStation.",
      realise_date: "2019-06-21",
      image: "https://i.ibb.co/LxMZRV3/ctr.png",
      IGDB_rating: "8.4",
      category: [28, 29],
      status: "RECENTLY ADDED",
      views_count: 0,
    },
    {
      title: "Marvel's Spider-Man",
      description:
        "Starring the world's most iconic Super Hero, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and utilizing the environment, to new combat and blockbuster set pieces, it's Spider-Man unlike any you've played before.",
      realise_date: "2018-09-07",
      image: "https://i.ibb.co/TBdxmkK/MSM.png",
      IGDB_rating: "8.7",
      category: [34, 39],
      status: "RECENTLY ADDED",
      views_count: 0,
    },
    {
      title: "Crash Team Racing Nitro-Fueled",
      description:
        "Crash Team Racing Nitro-Fueled is a kart racing game developed by Beenox and published by Activision. It is a remaster of Crash Team Racing, which was originally developed by Naughty Dog for the PlayStation.",
      realise_date: "2019-06-21",
      image: "https://i.ibb.co/LxMZRV3/ctr.png",
      IGDB_rating: "8.4",
      category: [28, 29],
      status: "RECENTLY ADDED",
      views_count: 0,
    },
    {
      title: "Crash Team Racing Nitro-Fueled",
      description:
        "Crash Team Racing Nitro-Fueled is a kart racing game developed by Beenox and published by Activision. It is a remaster of Crash Team Racing, which was originally developed by Naughty Dog for the PlayStation.",
      realise_date: "2019-06-21",
      image: "https://i.ibb.co/LxMZRV3/ctr.png",
      IGDB_rating: "8.4",
      category: [28, 29],
      status: "RECENTLY ADDED",
      views_count: 0,
    },
    {
      title: "Marvel's Spider-Man",
      description:
        "Starring the world's most iconic Super Hero, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and utilizing the environment, to new combat and blockbuster set pieces, it's Spider-Man unlike any you've played before.",
      realise_date: "2018-09-07",
      image: "https://i.ibb.co/TBdxmkK/MSM.png",
      IGDB_rating: "8.7",
      category: [34, 39],
      status: "RECENTLY ADDED",
      views_count: 0,
    },
    {
      title: "Crash Team Racing Nitro-Fueled",
      description:
        "Crash Team Racing Nitro-Fueled is a kart racing game developed by Beenox and published by Activision. It is a remaster of Crash Team Racing, which was originally developed by Naughty Dog for the PlayStation.",
      realise_date: "2019-06-21",
      image: "https://i.ibb.co/LxMZRV3/ctr.png",
      IGDB_rating: "8.4",
      category: [28, 29],
      status: "RECENTLY ADDED",
      views_count: 0,
    },
  ];

  return (
    <div className=" bg-dark  ">
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {modalTitle}
                </h5>
              </div>
              <div className="modal-body">
                <img src={modalImage} alt="" />
                {modalDescription}
                {modalDate}
              </div>
              <div className="modal-footer">
                {modalRating}

                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className=" row d-flex   justify-content-center  sliderContainer ">
              <div className="card mx-2" style={{ width: "16rem" }}>
                {" "}
                <img
                  className="card-img-top"
                  src={slideItems[0].image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{slideItems[0].title}</h5>
                  <p className="card-text">
                    {slideItems[0].description.substring(0, 80) + "..."}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={openModal}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-title={slideItems[0].title}
                    data-bs-description={slideItems[0].description}
                    data-bs-rating={slideItems[0].IGDB_rating}
                    data-bs-date={slideItems[0].realise_date}
                    data-bs-image={slideItems[0].image}
                  >
                    Read More
                  </button>
                </div>
              </div>
              <div className="card mx-2" style={{ width: "16rem" }}>
                {" "}
                <img
                  className="card-img-top"
                  src={slideItems[1].image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{slideItems[1].title}</h5>
                  <p className="card-text">
                    {slideItems[1].description.substring(0, 80) + "..."}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={openModal}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-title={slideItems[1].title}
                    data-bs-description={slideItems[1].description}
                    data-bs-rating={slideItems[1].IGDB_rating}
                    data-bs-date={slideItems[1].realise_date}
                    data-bs-image={slideItems[1].image}
                  >
                    Read More
                  </button>
                </div>
              </div>
              <div className="card mx-2" style={{ width: "16rem" }}>
                {" "}
                <img
                  className="card-img-top"
                  src={slideItems[2].image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{slideItems[2].title}</h5>
                  <p className="card-text">
                    {slideItems[2].description.substring(0, 80) + "..."}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={openModal}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-title={slideItems[2].title}
                    data-bs-description={slideItems[2].description}
                    data-bs-rating={slideItems[2].IGDB_rating}
                    data-bs-date={slideItems[2].realise_date}
                    data-bs-image={slideItems[2].image}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className=" row d-flex   justify-content-center  sliderContainer ">
              {" "}
              <div className=" row d-flex   justify-content-center  sliderContainer ">
                <div className="card mx-2" style={{ width: "16rem" }}>
                  {" "}
                  <img
                    className="card-img-top"
                    src={slideItems[3].image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{slideItems[3].title}</h5>
                    <p className="card-text">
                      {slideItems[3].description.substring(0, 80) + "..."}
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={openModal}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-title={slideItems[3].title}
                      data-bs-description={slideItems[3].description}
                      data-bs-rating={slideItems[3].IGDB_rating}
                      data-bs-date={slideItems[3].realise_date}
                      data-bs-image={slideItems[3].image}
                    >
                      Read More
                    </button>
                  </div>
                </div>
                <div className="card mx-2" style={{ width: "16rem" }}>
                  {" "}
                  <img
                    className="card-img-top"
                    src={slideItems[4].image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{slideItems[4].title}</h5>
                    <p className="card-text">
                      {slideItems[4].description.substring(0, 80) + "..."}
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={openModal}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-title={slideItems[4].title}
                      data-bs-description={slideItems[4].description}
                      data-bs-rating={slideItems[4].IGDB_rating}
                      data-bs-date={slideItems[4].realise_date}
                      data-bs-image={slideItems[4].image}
                    >
                      Read More
                    </button>
                  </div>
                </div>
                <div className="card mx-2" style={{ width: "16rem" }}>
                  {" "}
                  <img
                    className="card-img-top"
                    src={slideItems[5].image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{slideItems[5].title}</h5>
                    <p className="card-text">
                      {slideItems[5].description.substring(0, 80) + "..."}
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={openModal}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-title={slideItems[5].title}
                      data-bs-description={slideItems[5].description}
                      data-bs-rating={slideItems[5].IGDB_rating}
                      data-bs-date={slideItems[5].realise_date}
                      data-bs-image={slideItems[5].image}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            {" "}
            <div className=" row d-flex   justify-content-center  sliderContainer ">
              <div className="card mx-2" style={{ width: "16rem" }}>
                {" "}
                <img
                  className="card-img-top"
                  src={slideItems[6].image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{slideItems[6].title}</h5>
                  <p className="card-text">
                    {slideItems[6].description.substring(0, 80) + "..."}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={openModal}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-title={slideItems[6].title}
                    data-bs-description={slideItems[6].description}
                    data-bs-rating={slideItems[6].IGDB_rating}
                    data-bs-date={slideItems[6].realise_date}
                    data-bs-image={slideItems[6].image}
                  >
                    Read More
                  </button>
                </div>
              </div>
              <div className="card mx-2" style={{ width: "16rem" }}>
                {" "}
                <img
                  className="card-img-top"
                  src={slideItems[7].image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{slideItems[7].title}</h5>
                  <p className="card-text">
                    {slideItems[7].description.substring(0, 80) + "..."}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={openModal}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-title={slideItems[7].title}
                    data-bs-description={slideItems[7].description}
                    data-bs-rating={slideItems[7].IGDB_rating}
                    data-bs-date={slideItems[7].realise_date}
                    data-bs-image={slideItems[7].image}
                  >
                    Read More
                  </button>
                </div>
              </div>
              <div className="card mx-2" style={{ width: "16rem" }}>
                {" "}
                <img
                  className="card-img-top"
                  src={slideItems[8].image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{slideItems[8].title}</h5>
                  <p className="card-text">
                    {slideItems[8].description.substring(0, 80) + "..."}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={openModal}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-title={slideItems[8].title}
                    data-bs-description={slideItems[8].description}
                    data-bs-rating={slideItems[8].IGDB_rating}
                    data-bs-date={slideItems[8].realise_date}
                    data-bs-image={slideItems[8].image}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev "
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="text-white">Prev</span>
        </a>
        <a
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="text-white ">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Slider;
