import styled from "styled-components";

export const PrescriptionContainer = styled.div`
width:100%;
height:600px;
flex-direction: column;
align-items: flex-start;
padding: 10px;
background: #ffffff;
border-radius: 20px;
`;

export const Header = styled.div`
width: 95%;
margin:20px;
display: flex;
flex-direction: row;
align-items: flex-start;
`

export const Footer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: flex-start;
`

export const HeaderText = styled.div `
flex:1;
font-weight:bold;
font-size:20px;
text-align:left;
`

export const ViewAll = styled.div`
flex:1;
margin-top: 5px;
color: #ff8011;
font-weight:bold;
text-align:right;
`;

export const PrescriptionList = styled.div`
width: 95%;
height: 500px;
display:flex;
flex-direction:row;
margin-left: 40px;
overflow-x:auto;
`;

export const PrescriptionElement = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  padding: 10px;
  border: 3px;
  margin-right: 5px;
  flex-direction: column;
`;

export const Image_Medicine = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 10px;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Date = styled.div`
text-align:left;
margin-top:20px;
font-size:14px;
color: rgba(156, 163, 175);
`

export const Id = styled.div`
text-align:left;
margin-top:5px;
font-weight:bold;
font-size:20px;
`
export const Detail = styled.div`
height:20%;
text-align:left;
margin-bottom:5px;
color: rgba(156, 163, 175);
overflow-y: hidden;
`

export const Doctor = styled.div`
height:120%;
width:20%;
background-image:  url(${props => props.img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 40px;
`

export const ViewAllButton = styled.div`
height:120%;
width:50%;
font-weight:bold;
text-align:center;
border:solid;
border-width:1px;
border-radius: 15px;
padding-top: 12px;
padding-bottom: 5px;
padding-left: 15px;
padding-right: 15px;
font-weight: bold;
color: #0075ff;
font-size:14px;
margin-right:30%;
`;
