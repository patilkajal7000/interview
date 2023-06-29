import logo from './logo.svg';
import './App.css';
import { Navbar } from './componant/Navbar';
import { AllRoutes } from './componant/AllRouts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
