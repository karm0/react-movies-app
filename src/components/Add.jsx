import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "./Card";

const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=3e820fe8`)
      .then((res) => {
        if (res.data.Search) {
          setMovies(res.data.Search);
        }
      });
  }, [searchValue]);
  return (
    <Container>
      <div className="d-flex justify-content-center pt-5 ">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <ul className="d-flex flex-wrap mt-5 justify-content-center align-items-center">
        {movies.map((movie) => (
          <li key={movie.imdbID}>{<Card movie={movie} />}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Add;
