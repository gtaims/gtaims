import React from "react"
import logo from "../Images/logo.jpeg"
import './Home.css'

export default function Home() {

  return (
    <div>
        <div className="logo-container">
            <img src={logo} width = "100" height = "100" display="flex" justify-content = "center" 
            align-items = "center"/>
        </div>

        <h1> The Artificial Intelligence for Medicine and Healthcare Society </h1>
        
        <div className="rectangle"> </div>
        To our knowledge, we are the first student organization in our field in the country. 
        
        As an organization of both undergraduate and graduate students, we are dedicated to 
        (1) helping one another become the next generation of leaders within the field of AI for healthcare and medicine, 
        (2) to helping curious students learn more about the field, 
        and (3) to broadly creating a strong community around the field at Georgia Tech.


    </div>
  )
}

