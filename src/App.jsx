import Add from "./components/Add";
import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
      </Routes>
    </Router>
  );
};

export default App;
