import logo from './logo.svg';
import './App.css';
import SideBar from "./sidebar";
import "./styles.css";

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1>Click to show menu</h1>
      </div>
    </div>
  );
}


export default App;
