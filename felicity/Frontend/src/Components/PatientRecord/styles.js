import styled from "styled-components";

export const RecordContainer = styled.div`
margin-right: 30px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
background: white;
border-radius: 20px;
box-shadow: 0px 4px 5px 0px #EDEEEF;
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
height: 300px;
flex-direction: column;
overflow-y: auto;
&::-webkit-scrollbar {
  width: 10px;
}
`;

// export const Column = styled.div`
// flex-direction: column;
// width:80%
// `

export const Column = styled.div`
  width:100%;
  padding: 5px;
  flex-direction: column;
`;

export const RecordElement = styled.div`
width: 90%;
height: 35%;
min-width:300px;
margin-left: 40px;
margin-bottom: 10px;
padding: 20px;
border: 3px;
flex-direction: column;
background-color: #F8F9FA;
border-radius: 10px;
`;

export const Date = styled.div`
  margin: 0px;
  margin-right: 15px;
  font-weight: bold;
 
`;

export const TimeEmail = styled.p`
margin: 0px;
color: rgba(107, 114, 128);
//   font-size: 14px;
`;



// export const Detail = styled.div`
// width:20%;
// margin-top:15px;
// font-weight:bold;
// text-align:right;


export const Doctor = styled.p`
margin: 0px;
color: rgba(156, 163, 175);
margin-right: 3px;
//   font-size: 14px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Detail = styled.button`
  margin: 0px;
  margin-right: 13px;
  font-weight: bold;
  color: rgba(239, 68, 68);
  background-color: #F8F9FA;
  outline: none;
  border: none;

`;

export const First = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 5px;
text-decoration:none;
`;