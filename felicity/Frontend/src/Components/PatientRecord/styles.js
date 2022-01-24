import styled from "styled-components";

export const RecordContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
background: #ffffff;
border-radius: 20px;
`;

export const Header = styled.div`
width: 92%;
margin:20px;
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

export const RecordList = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
overflow-y: auto;
&::-webkit-scrollbar {
  width: 10px;
}
`;

export const Column = styled.div`
flex-direction: column;
width:80%
`

export const RecordElement = styled.div`
  width: 92%;
  height: 150px;
  margin-left: 40px;
  margin-bottom: 10px;
  padding: 20px;
  border: 3px;
  display: flex;
  align-items: flex-center;
  background: #F8F9FA;
  border-radius: 10px;
`;

export const Date_Id = styled.div`
text-align:left;
font-weight:bold;
`

export const Doctor = styled.div`
text-align:left;
margin-top:5px;
color: rgba(156, 163, 175);
`

export const Detail = styled.div`
width:20%;
margin-top:15px;
font-weight:bold;
text-align:right;
`