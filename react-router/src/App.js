import logo from './logo.svg';
import './App.css';
import Options from './Options'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 



function App() {
  return (
    <div className="App">
      <Options/>
      <p>landing pages</p>
    </div>
  );
}

export default App;
