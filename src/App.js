import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
