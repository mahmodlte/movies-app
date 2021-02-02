import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import { MoviesProvider } from "./components/MoviesContext/MoviesContext";
function App() {
  return (
    <MoviesProvider>
      <>
        <Header />
        <Home />
      </>
    </MoviesProvider>
  );
}

export default App;
