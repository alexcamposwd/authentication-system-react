import styled from 'styled-components'

export const Home = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 50px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grey3};
    z-index: 200;
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 40px;
    }
  }
`

// export const BackImg = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100vh;
//   top: 0;
//   left: 0;
//   background-image: url('https://images.unsplash.com/photo-1654933922741-1d0f3e758055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   backdrop-filter: blur(15px); 
//   z-index: 0;

//   @media (max-width: 750px) {
//   }
//   @media (max-width: 550px) {
//     width: 100vw;
//     top: 0;
//     left: 0;
//     background-image: url('https://images.unsplash.com/photo-1654933922741-1d0f3e758055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
//     background-repeat: no-repeat;
//     background-size: cover;
//     backdrop-filter: blur(15px); 
//     background-position: center;
//     z-index: 0;
//   }
// `

// export const Blur = styled.div`
//   background: rgba(255, 255, 255, 0.3); // Make sure this color has an opacity of less than 1
// 	width: 100%;
//   height: 100vh;
// `