import styled from 'styled-components'

export const Register = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 600px;
    background: ${(props) => props.theme.colors.sand};
    padding: 30px;
    margin-top: 40px;
    border-radius: 10px;

    h1 {
      font-size: 32px;
      font-weight: 600;
      text-transform: uppercase;
      text-align: center;
      color: ${(props) => props.theme.colors.grey3};
    }
    
    label {
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      padding: 15px 0px 6px 0px;
      color: ${(props) => props.theme.colors.grey3};
    }

    input,
    select {
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      padding: 10px;
      border: 0;
      outline: 0;
      cursor: pointer;
    }

    span {
      width: 100%;
      text-align: center;
      font-size: 13px;
      font-weight: 400;
      padding: 10px 0px 0px 0px;
      color: ${(props) => props.theme.colors.redmd};
    }
  }

  @media (max-width: 750px) {
    form {
      width: 80%;
      padding: 20px;

      h1 {
        font-size: 30px;
      }
    }
  }
  @media (max-width: 550px) {
    form {
      width: 90%;
      padding: 20px;

      h1 {
        font-size: 26px;
      }
      
      label {
        font-size: 13px;
      }

      input,
      select {
        font-size: 13px;
      }
    }
  }
`

export const FieldButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  button {
    width: 150px;
    height: 30px;
    margin: auto;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    border: 2px solid ${(props) => props.theme.colors.gold};
    background-color: ${(props) => props.theme.colors.sandgold};
    box-shadow: 4px 5px 8px ${(props) => props.theme.colors.blackopacity};
    color: ${(props) => props.theme.colors.grey2};
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }

  p {
    font-size: 13px;
    font-weight: 400;
    text-align: justify;
    text-transform: lowercase;
    margin-top: 10px;

    span {
      height: 15px;
      font-weight: 600;
      text-transform: capitalize;

      a {
        color: ${(props) => props.theme.colors.grey2};
      }
      
      a:hover {
        color: ${(props) => props.theme.colors.gold};
      }
    }
  }

  @media (max-width: 750px) {
    button {
      width: 140px;
      height: 25px;
      font-size: 13px;
    }
  }
  @media (max-width: 550px) {
  
    button {
      width: 120px;
      height: 25px;
      font-size: 13px;
    }
  }
`

export const FieldError = styled.div`
  display: flex;
  width: 100%;
`

export const MsgSucess = styled.p`
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    padding: 15px 0px 0px 0px;
    color: ${(props) => props.theme.colors.greendark};

    @media (max-width: 550px) {
      font-size: 15px;
    }
`

export const MsgError = styled.p`
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    padding: 15px 0px 0px 0px;
    color: ${(props) => props.theme.colors.redmd};

    @media (max-width: 550px) {
      font-size: 15px;
    }
`