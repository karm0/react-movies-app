import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeWatchList } from "../store/watchList";
import { addWatched } from "../store/watchList";

const WatchList = () => {
  const watchList = useSelector((state) => state.watchList.value);
  const dispatch = useDispatch();

  const handlerRemoveFromWatchList = (movie) => {
    dispatch(removeWatchList(movie));
  };

  const sendToWatched = (e) => {
    dispatch(addWatched(e));
    handlerRemoveFromWatchList(e.imdbID);
  };

  return (
    <Container>
      <div className="text-end" style={{ color: "#0b5ed7" }}>
        <span>{watchList.length}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-play-btn ms-2"
          viewBox="0 0 16 16"
        >
          <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
        </svg>
      </div>
      <div className="mt-5 d-flex justify-content-between gap-3 flex-wrap">
        {watchList.length > 0 ? (
          watchList.map((e) => (
            <div className=" text-center m-auto" key={e.imdbID}>
              <div className="imges">
                <img src={e.Poster} alt={e.Title} width={200} />
              </div>
              <div>
                <h3 className="fs-5 mt-3">{e.Title}</h3>
                <h4 className="fs-5">{e.Year}</h4>
                <div className="d-flex gap-2 py-4 d-flex justify-content-center">
                  <Button
                    onClick={() => handlerRemoveFromWatchList(e.imdbID)}
                    className="btn btn-danger"
                  >
                    Delete
                  </Button>
                  <Button onClick={() => sendToWatched(e)} className="btn">
                    Add to watched
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-100 text-center fs-1 opacity-50">
            There are no movies in watch list
          </div>
        )}
      </div>
    </Container>
  );
};

export default WatchList;
