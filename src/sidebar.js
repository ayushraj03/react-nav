import { slide as Menu } from "react-burger-menu";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import styled from "styled-components";

export default props => {

  const [status, setStatus] = useState("No data");

  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
`;

function handleClick () {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(res => {
    var data = res.data
    console.log("Success")
    setStatus("Data loaded Successfully!")
    
  }).catch(e => {
    console.log('Setting the status after ERROR!')
    setStatus("Error fetching the API")
  });
}
  return (
    <Menu {...props}>
      <Button onClick={handleClick}>Sync</Button>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/services">
        Services
      </a>

      <a className="menu-item" href="/contact">
        Contact us
      </a>
    </Menu>
  );
};