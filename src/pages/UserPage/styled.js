import styled, { css } from 'styled-components'
import { FaUserEdit, FaUserTimes } from 'react-icons/fa'

export const User = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  z-index: 200;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 50px;
  padding: 15px 15px 40px 15px;
  background-color: ${(props) => props.theme.colors.sand};
  z-index: 200;

  h3 {
    width: 100%;
    font-size: 22px;
    font-weight: 500;
    padding: 20px 0;
    color: ${(props) => props.theme.colors.goldmd};

    span {
      font-size: 25px;
      font-weight: 600;
      text-transform: capitalize;
      padding-left: 12px;
      color: ${(props) => props.theme.colors.grey4}
    }
  }

  p {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 0;
    color: ${(props) => props.theme.colors.goldmd};

    span {
      font-size: 20px;
      font-weight: 500;
      padding-left: 12px;
      color: ${(props) => props.theme.colors.grey4}
    }
  }

  @media (max-width: 750px) {
    width: 70%;
    margin-top: 40px;

    h3 {
      font-size: 20px;
      padding: 15px 0;

      span {
        font-size: 23px;
        padding-left: 10px;
      }
    }

    p {
      font-size: 16px;

      span {
        font-size: 18px;
        padding-left: 10px;
      }
    }
  }
  @media (max-width: 550px) {
    width: 80%;
    margin-top: 30px;
    padding: 10px 10px 20px 10px;

    h3 {
      font-size: 18px;
      padding: 10px 0;

      span {
        font-size: 20px;
        padding-left: 10px;
      }
    }

    p {
      font-size: 15px;

      span {
        font-size: 16px;
        padding-left: 10px;
      }
    }
  }
`

export const Icons = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 10px;
`

export const sharedIconStyle = css`
  position: absolute;
  width: 50px;
  right: 10px;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.grey4}
`

export const CustomUserEdit = styled(FaUserEdit)`
  ${sharedIconStyle}
`

export const CustomUserDel = styled(FaUserTimes)`
  ${sharedIconStyle}
`