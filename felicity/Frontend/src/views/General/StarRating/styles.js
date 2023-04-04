import styled from "styled-components"

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color : #F8F9FA;
    min-height: 800px;
    min-width: 800px;
    margin-top : 5%;
    margin-bottom: 5%;
`;

export const Button = styled.button`
background-color: #0075FF;
border-color: #0075ff;
font-size: 16px;
color: #ffffff;
padding: 10px 20px 10px 20px;
border-radius: 20px;
text-decoration: none;
&:hover { background-color: #3D7EFF; }
&:active { background-color: #004FEB; }

`;


export const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    }
  
  };