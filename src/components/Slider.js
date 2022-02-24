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
  ];
  return (
    <div>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-around",
            background: "brown",
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            border: "5px solid orange",
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          },
        }}
        itemsToShow={3}
        speed={400}
      >
        {slideItems.map((item, index) => (
          <div
            style={{
              backgroundImage: "url(" + item.image + ")",
              minWidth: 400,
              minHeight: 400,
              border: "30px solid white",
              textAlign: "center",
              lineHeight: "240px",
              boxSizing: "border-box",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            key={index}
          >
            <p
              style={{
                fontSize: "2rem",
                background: "black",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                fontSize: "1rem",
                background: "blue",
                fontWeight: "bold",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
