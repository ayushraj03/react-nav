import logo from './logo.svg';
import './App.css';
import SideBar from "./sidebar";
import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from 'react';

function App() {

  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        
        
        <p>No data</p>
      </div>
    </div>
  );
}


export default App;
