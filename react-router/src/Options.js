import React from 'react';
import ReactDOM from 'react-dom';
import {useHistory} from 'react-router-dom';



    
    

function Options() {
    let history = useHistory();

    function handleClickOne(){
        history.push("./Inventory.js")
    }

    function handleClickTwo(){
        console.log('i was clicked from two')
    }

    function handleClickThree(){
        console.log('i was clicked from three')
    }

    return (
      <div className="App">
          <button onClick={handleClickOne}>Sync inventory </button>
          <hr/>
          <button onClick={handleClickTwo}>customers</button>
          <hr/>
          <button onClick={handleClickThree}>packages </button>
         
      </div>
    );
  }
  
  export default Options;
  