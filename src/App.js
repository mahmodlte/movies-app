import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import PopularMovies from "./containers/PopularMovies/PopularMovies";
import { MoviesProvider } from "./components/MoviesContext/MoviesContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <MoviesProvider>
        <>
          <Header />
          <Switch>
            <Route exact path="/populer">
              <PopularMovies />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </>
      </MoviesProvider>
    </Router>
  );
}

export default App;
