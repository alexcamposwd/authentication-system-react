import styled from 'styled-components'

export const Private = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95vh;
  align-items: center;
  justify-content: center;
  padding:30px;
  gap: 30px;
  z-index: 200;

  h2 {
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    color: ${(props) => props.theme.colors.grey3};
    z-index: 200;
  }

  @media (max-width: 750px) {
    h2 {
      font-size: 40px;
    }
  }
  @media (max-width: 550px) {
    h2 {
      font-size: 30px;
    }
  }
`