import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 10px;
  background: ${(props) => props.theme.colors.sand};
  cursor: pointer;
  z-index: 200;

  h3 {
    font-size: 20px;
    font-weight: 500;
    padding: 15px;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.grey4};
  }

  @media (max-width: 750px) {
    width: 70%;
    margin-top: 15px;

    h3 {
      font-size: 18px;
    }
  }
  @media (max-width: 550px) {
    width: 80%;
    margin-top: 10px;

    h3 {
      font-size: 16px;
      padding: 10px;
    }
  }
`