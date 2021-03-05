import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Folder from './Containers/Folder'
import Form from './Components/Form'

function App() {
  const [isOpen, setIsOpen] = useState(true)
 
  let clickHandler = () =>{
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <>
    <h3>hello World!</h3>
    <Form />
    <Folder name={"Desktop"} isOpen={isOpen} clickHandler={clickHandler}/>
    <Folder name={"Applications"} isOpen={isOpen} clickHandler={clickHandler}/>
   </>
  );
}


export default App;
