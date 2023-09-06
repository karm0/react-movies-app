/* eslint-disable react/prop-types */
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addWatchList, addWatched } from "../store/watchList";
import { useState } from "react";

const Card = ({ movie }) => {
  const dispatch = useDispatch();
  const [clickedMoviesList, setClickedMoviesList] = useState([]);

  const saveMovisList = () => {
    dispatch(addWatchList(movie));
    setClickedMoviesList([...clickedMoviesList, movie]);
  };

  const saveMovisWatched = () => {
    dispatch(addWatched(movie));
    setClickedMoviesList([...clickedMoviesList, movie]);
  };

  const isButtonDisabledWatchList = clickedMoviesList.includes(movie);

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div className=" text-center">
        <div className="imges">
          <img src={movie.Poster} alt={movie.Title} width={200} />
        </div>
        <div>
          <h3 className="fs-5 mt-3">{movie.Title}</h3>
          <h4 className="fs-5">{movie.Year}</h4>
          <div className="d-flex gap-2 py-4 d-flex justify-content-center">
            <Button
              disabled={isButtonDisabledWatchList}
              onClick={() => saveMovisList(movie)}
              className="btn"
            >
              Add to watchlist
            </Button>
            <Button
              disabled={isButtonDisabledWatchList}
              onClick={() => saveMovisWatched(movie)}
              className="btn"
            >
              Add to watched
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
