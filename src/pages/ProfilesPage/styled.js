import styled from 'styled-components'

export const Profile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95vh;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.goldmd};
    padding: 30px 0 20px 0;
    z-index: 200;
  }

  @media (max-width: 750px) {
    h1 {
      font-size: 22px;
      padding: 25px 0 10px 0;
    }
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 20px;
      padding: 20px 0 5px 0;
    }
  }
`