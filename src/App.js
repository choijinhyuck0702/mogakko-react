import './App.css';
import React, {useState} from 'react';
import Ex05 from './Ex05';

function App() {
  const [number, setNumber] = useState(0);

  function onClick(){
    setNumber(number + 1);
  }
  function onClick2(){
    setNumber(number - 1);
  }
  function onClick3(){
    setNumber(number*2);
  }
  function onClick4(){
    setNumber(number/2);
  }
  function onClick5(){
    setNumber(0);
  }
  return (
    <div>
      <div>{number} * 1 = {number*1}</div>
      <div>{number} * 2 = {number*2}</div>
      <div>{number} * 3 = {number*3}</div>
      <div>{number} * 4 = {number*4}</div>
      <div>{number} * 5 = {number*5}</div>
      <div>{number} * 6 = {number*6}</div>
      <div>{number} * 7 = {number*7}</div>
      <div>{number} * 8 = {number*8}</div>
      <div>{number} * 9 = {number*9}</div>
      <Ex05 onClick={onClick} text="+1"/>
      <Ex05 onClick={onClick2} text="-1"/>
      <Ex05 onClick={onClick3} text="*2"/>
      <Ex05 onClick={onClick4} text="/2"/>
      <Ex05 onClick={onClick5} text="reset"/>
    </div>
  );
}

export default App;
