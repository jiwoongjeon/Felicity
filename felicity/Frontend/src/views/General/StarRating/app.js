import { useState } from "react";
import './app.css';
import axios from 'axios'
import API_URL from "../../../API/server-ip";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { SocketContext } from "../../../API/video";
import styled from "styled-components"
import {MainContainer, Button, styles } from "./styles.js"
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [rate, setRate] = useState("");
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

 


  return (
    <MainContainer>
    <div style={styles.container}>
      <h2>Tell us about your experience!</h2>
      <br></br>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="How was your experience?"
        style={styles.textarea}
      />
      <textarea
        placeholder="Please leave a message to your doctor."
        style={styles.textarea}
      />
      <NavLink to='./Home'>
      <Button>
        Submit
      </Button>
      </NavLink>
      
    </div>
    </MainContainer>
  );
};






export default App;
 