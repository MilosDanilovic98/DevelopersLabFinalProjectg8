import React, { useState } from "react";

import Carousel from "react-simply-carousel";

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

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
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
