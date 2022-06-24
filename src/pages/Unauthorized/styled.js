import styled from 'styled-components'

export const UnAuth = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 150px;

  h1 {
    font-size: 40px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
    color: ${(props) => props.theme.colors.grey3};
  }

  p {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.grey3};
  }

  button {
    font-size: 16px;
    font-weight: 500;
    padding: 7px 25px;
    color: ${(props) => props.theme.colors.gold};
  }

  @media (max-width: 750px) {
    padding-top: 140px;

    h1 {
      font-size: 35px;
    }
  }
  @media (max-width: 550px) {
    padding-top: 140px;

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 15px;
      margin-bottom: 15px;
    }

    button {
      font-size: 14px;
      padding: 5px 20px;
      color: ${(props) => props.theme.colors.gold};
    }
  }
`