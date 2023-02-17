import React, { FC } from "react";
import "./card.css";
import StarRatingComponent from "react-star-rating-component";
import { MoviesDetail } from "./CardSlider";

type Props = {
  movies: MoviesDetail;
};

const Card: FC<Props> = ({ movies }) => {
  const ConvertToRate = (vote: number): number => (vote * 5) / 10;

  const options = {
    name: "stars",
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: Math.ceil(
      movies && ConvertToRate(parseFloat(`${movies?.vote_average}`))
    ),

    editing: true,
    emptyStarColor: "#fff",
  };

  return (
    <div className="card-container">
      <div className="card-image-container">
        <img
          src={`https://image.tmdb.org/t/p/w440_and_h660_face${movies?.poster_path}`}
          alt="poster"
        />
      </div>
      <div className="detail-container">
        <h2>{movies?.name ? movies?.name : movies?.title} </h2>
        <p>
          {movies?.release_date ? movies.release_date : movies.first_air_date}
        </p>
        <p className="stars">
          <StarRatingComponent {...options} />
        </p>
      </div>
    </div>
  );
};

export default Card;
