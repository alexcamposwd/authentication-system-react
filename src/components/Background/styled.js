import styled from "styled-components";

export const BackImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
    background-image: ${(props) => `url(${props.imgUrl})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 1;
`

export const Blur = styled.div`
  background: rgba(255, 255, 255, 0.2); // Make sure this color has an opacity of less than 1
  backdrop-filter: ${(props) => `blur(${props.blur+"px"})`}; // This be the blur
  height: 100vh;
	width: 100%;
`