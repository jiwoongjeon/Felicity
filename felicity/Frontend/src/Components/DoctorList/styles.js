import styled from "styled-components";
import default_profile from '../assets/default_profile.png'

export const PostContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
padding-left: 20px;
padding-right: 30px;
background: white;
border-radius: 20px;
`;

export const Header = styled.p`
  padding-left: 20px;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  margin-top:20px;
`;

export const PostElementContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
overflow-y: auto;
&::-webkit-scrollbar {
  width: 10px;
}
`;

export const PostElement = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;

export const HeaderColumn = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  vertical-align:center;
  padding: 5px;
`;

export const BodyColumn = styled.div`
  width:100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  vertical-align:center;
  padding: 5px;
`;

export const Divider = styled.div`
  display: flex;
  background: #E3E8F0;
  margin-bottom: 5px;
  padding: 1px;
  border-radius: 2px;
`;

export const NoLabel = styled.p`
  flex: 1;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
`;
export const PhotoLabel = styled.p`
  flex: 3;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
  text-align: center;
`;

export const DepartLabel = styled.p`
  flex: 7;
  text-align: left;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
`;
export const AvailLabel = styled.p`
  flex: 3;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
`;

export const AvailContainer = styled.div`
flex: 3;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const AvailBubble = styled.button`

height: 70%;
display: flex;
background-color: #0075ff;
border-radius: 8px;
padding-top: 2px;
padding-bottom: 2px;
padding-left: 15px;
padding-right: 15px;
margin-right: 10px;
font-weight: bold;
color: white;
line-height: 45px;
border: none;
   &:hover {
      background-color: #268aff;
    }
`;
export const UnavailableBubble = styled.div`

height:70%;
display: flex;
background-color: #a0aec0;
border-radius: 8px;
padding-top: 2px;
padding-bottom: 2px;
padding-left: 15px;
padding-right: 15px;
margin-right: 10px;
font-weight: bold;
color: white;
line-height: 45px;

`;

export const No = styled.p`
  flex: 1;
  line-height: 70px;
  text-align: center;
  margin-top: 4px;
  color: gray;
`;
export const PhotoArea = styled.div`
  width:65px;
  height:65px;
  min-width:65px;
  border-radius: 8px;
  background-image: url(${props => props.img? props.img : default_profile });
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Doctor = styled.p`
  flex: 12;
  margin-top: 2px;
  margin-left: 10px;
  text-align: left;
  font-weight: bold;
`;
export const Department = styled.p`


  font-weight: bold;
  text-align: left;
  color: grey;
`;
export const Name = styled.p`
  margin-top: 2px;
  font-weight: bold;
  text-align: left;
`;