import styled from "styled-components";

export const Background = styled.div`
	width : 100vw;
	height: 100vh;
	/* display: grid;
	grid-template-rows: 0.1fr 1fr;
	grid-template-areas:
	"directory"
	"video"; */
	background-color: #F8F9FA;
	/* background-color: red; */
`;

export const Directory = styled.div`
	grid-area: directory;
	place-self: center start;
	/* background-color: blue; */
`;

export const Video = styled.div`
	width: 100%;
	height: 100%;
	/* grid-area: video; */
	/* background-color: yellow; */
`;