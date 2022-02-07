import styled from "styled-components";

export const NewBoardContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
background: white;
border-radius: 20px;
padding-left: 40px;
`

export const Header = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  margin-top:3%;
  margin-bottom:2%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  margin:10px;
`;

export const ColumnTitle = styled.div`
  height:30px;
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px 30px;
  overflow-y:hidden;
`;

export const WriteContainer = styled.div`
width: 90%;
height: 70%;
display: flex;
flex-direction: column;
border: 1px solid #0075FF;
border-radius: 8px;
padding-top: 3px;
font-weight: bold;
color: #0075FF;
box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1)
`;

export const WriteSubContainer = styled.div`
width: 100%;
height: 100%;
padding-left:2%;
overflow-y:hidden;
`;


export const Divider = styled.div`
  width:100%;
  display:flex;
  background: #E3E8F0;
  margin-top:5px;
  margin-bottom: 5px;
  padding: 1px;
  border-radius: 2px;
`;

export const TitleInput = styled.input.attrs({
    type: "text",
    placeholder: "Title",
})`
    width: 95%;
    margin-top: 1.5%;
    margin-left:2%;
    margin-bottom: 0.5%;
    border: none;
    outline: none;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #aaa;
      }
`;

export const ContentInput = styled.input.attrs({
    type: "text",
    placeholder: "Description Text & Input",
})`
    width:95%;
    height:85%;
    margin-top: 1.5%;
    margin-left:2%;
    margin-bottom: 0.5%;
    border: none;
    outline: none;
    multiline: true;    
    overflow-y: auto;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: #ccc;
  }
`;

export const Blank = styled.p`
margin-top:20px;
`

export const SubmitBtnDisabled = styled.div`
height:45px;
width:120px;
text-align:center;
border: 1px solid #0075FF;
border-radius: 10px;
margin-top:13px;
margin-left:40px;
padding-top: 5px;
font-weight: bold;
color: #0075FF;
margin-bottom:1%;
`;

export const SubmitBtn = styled.div`
height:45px;
width:120px;
text-align:center;
background-color: #0075FF;
border-radius: 10px;
margin-top:13px;
margin-left:40px;
padding-top: 5px;
font-weight: bold;
color: white;
margin-bottom:1%;
`;