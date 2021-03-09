import './App.css';
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import MovieInfo from './components/MovieInfo/MovieInfo';
import Upcoming from './components/Upcoming/Upcoming';
import TopRated from './components/TopRated/TopRated';

function App()
{
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MovieInfo />
        </Route>
        <Route path="/upcoming">
          <Upcoming />
        </Route>
        <Route path="/top-rated">
          <TopRated />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
