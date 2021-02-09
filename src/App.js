import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import PopularMovies from "./containers/PopularMovies/PopularMovies";
import MoviePage from "./containers/MoviePage/MoviePage";
import { MoviesProvider } from "./components/MoviesContext/MoviesContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <MoviesProvider>
        <>
          <Header />
          <Switch>
            <Route exact path="/popular" component={PopularMovies} />
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={MoviePage} />
          </Switch>
        </>
      </MoviesProvider>
    </Router>
  );
}

export default App;
