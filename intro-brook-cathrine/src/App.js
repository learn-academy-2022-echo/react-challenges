import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <>
        <Header/>
        <Profile/>
        <Favorites/>
        </>
      </header>

        <Footer/>
    </div>
  );
}

export default App;
