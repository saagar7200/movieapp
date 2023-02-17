import React, { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import "./cardSlider.css";
import { z } from "zod";
import { getMovies } from "../../api/getApi";
import { useQuery } from "react-query";
type Props = {
  movie: boolean;
};

const dataType = z.object({
  name: z.string().optional(),
  backdrop_path: z.any(),
  adult: z.boolean().optional(),
  id: z.number().optional(),
  title: z.string().optional(),
  original_language: z.string().optional(),
  original_title: z.string().optional(),
  original_name: z.string().optional(),
  overview: z.string().optional(),
  poster_path: z.any().optional(),
  media_type: z.string().optional(),
  genre_ids: z.array(z.number()),
  popularity: z.number().optional(),
  release_date: z.string().optional(),
  video: z.boolean().optional(),
  vote_average: z.number().optional(),
  vote_count: z.number().optional(),
  first_air_date: z.string().optional(),
  origin_country: z.array(z.string()).optional(),
});

const MovieSchema = z.array(dataType);

export type MoviesDetail = z.infer<typeof dataType>;

const CardSlider: FC<Props> = ({ movie }) => {
  const [error, setError] = useState("");

  const { data, isLoading } = useQuery("moviesList", async () => {
    try {
      const data = await getMovies();

      const parsed = MovieSchema.safeParse(data);

      if (!parsed.success) throw new Error("Error fetching movies");

      return parsed.data;
      // return data
    } catch (err) {
      if (err instanceof Error) {
        // console.log('errror------------>',err?.message);
        setError(err.message);
        // throw new Error(err?.message)
      }
    }
  });

  //filter data
  const FilterMovies = data?.filter((itm) => {
    if (!movie) {
      return itm.media_type === "tv";
    }
    return itm.media_type === "movie";
  });

  // let  Newdata:MoviesDetail = FilterMovies()

  const settings = {
    padding: 3,
    margin: 5,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          className: "center",
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          infinite: true,
        },
      },
      {
        breakpoint: 555,
        settings: {
          className: "center",
          centerMode: true,
          centerPadding: "20%",
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          doys: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          className: "center",
          centerMode: true,
          centerPadding: "20%",
          slidesToShow: 1,
          // infinite: true,

          slidesToScroll: 1,
          arrows: false,
          doys: true,
        },
      },
    ],
  };

  if (isLoading === true) {
    return (
      <>
        <h2 style={{ color: "#042541" }}>Loading....</h2>
        <p style={{ color: "#042541" }}> Please Wait a Moment </p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h2 style={{ color: "red" }}>{error}</h2>
        <p style={{ color: "#042541" }}> Try again sometimes later </p>
      </>
    );
  }

  return (
    <div className="card-wrapper">
      <div className="in-card-wrapper">
        <Slider {...settings}>
          {FilterMovies &&
            FilterMovies.map((m: MoviesDetail, i: number) => {
              return (
                <div className="slider-card-container" key={i}>
                  <Card movies={m} key={i} />
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
