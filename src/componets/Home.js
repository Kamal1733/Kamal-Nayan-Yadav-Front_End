import React from 'react'
import List from "./List"
import imgg from "../SteelEye_Logo.jpg";
const Home = () => {
  return (
    <div  className="App"  style={{ display:"flex" ,flexDirection:"column" , alignItems:"center"}}>
     
      
      <h1>Output of the given Assignment</h1>
     <List  />
    
     <p   style={{color:"solid-black"}}>hint: click on the any above background colour will be changed into Green. </p>

    </div>
  )
}

export default Home