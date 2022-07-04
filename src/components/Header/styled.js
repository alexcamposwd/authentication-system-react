import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { FaUser, FaUserShield } from 'react-icons/fa'

export const Header = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 320px ;
  height: 50px;
  background: ${(props) => props.theme.colors.sand};
  align-items: center;

  ul {
    position: absolute;
    display: flex;
    align-items: center;
    list-style: none;
    gap: 50px;
    left: 50px;

    li {
    }
    
    a {
      text-transform: uppercase;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      color: ${(props) => props.theme.colors.goldmd};
    }
  }

  @media (max-width: 750px) {
    ul {
      gap: 40px;
      left: 40px;

      a {
        font-size: 15px;
      }
    }
  }
  @media (max-width: 550px) {
    ul {
      gap: 10px;
      left: 15px;

      a {
        font-size: 13px;
      }
    }
  }
`

export const Profile = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  right: 50px;

  a {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.goldmd};
  }

  @media (max-width: 750px) {
    width: 140px;
    right: 40px;

    a {
      font-size: 15px;
    }
  }
  @media (max-width: 550px) {
    width: 100px;
    right: 15px;

    a {
      font-size: 13px;
    }
  }
`

export const Name = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  h3 {
    color: ${(props) => props.theme.colors.grey3};
  }
  p {
    color: ${(props) => props.theme.colors.redlight};
  }

  @media (max-width: 550px) {
    font-size: 12px;
  }
`

export const Icons = styled.div`
  padding: 0 10px ;

`

export const sharedIconStyle = css`
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.grey4}
 
`

export const CustomIconUser = styled(FaUser)`
  ${sharedIconStyle}
`

export const CustomIconAdmin = styled(FaUserShield)`
  ${sharedIconStyle}
`

export const CustomLink = styled(Link)`
  ${props => props.disabled && css`
     cursor: default;
  `}
`
