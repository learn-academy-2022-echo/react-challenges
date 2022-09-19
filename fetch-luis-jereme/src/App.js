import logo from './logo.svg';
import './App.css';
import showAddress from './components/showAdress';
// const [ipAddress, setIpAddress] = 

// useState(null)

const App = () => {

  return (

   <>
   <h1>IP ADDRESS API</h1>
   <button onClick={showAddress}>Show IP Address</button>
   
   
   </>
  );
}

export default App;
