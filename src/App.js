import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <CreateBlog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
