import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import * as S from './styled'

const Header = () => {
  const { auth, isLogged, setIsLogged, logout } = useAuth()
  const [roleLog, setRoleLog] = useState('')

  useEffect(() => {
    const getToken = localStorage.getItem('token')
    if (getToken) {
      setRoleLog(auth.role)
      setIsLogged(true)
    }
  }, [auth, setRoleLog])

  let profile = null

  switch (roleLog) {
    case 'user':
      profile = (
        <Link to={`/user/${auth._id}`}>
          <S.CustomIconUser />
        </Link>
      )
      break
    case 'admin':
      profile = (
        <Link to={'/profiles'}>
          <S.CustomIconAdmin />
        </Link>
      )
      break
    default:
      profile = ''
      break
  }
  const handleClick = (e) => {
    if (!isLogged) {
      e.preventDefault()
    }
  } 

  return (
    <S.Header>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <S.CustomLink onClick={handleClick} disabled={!isLogged} to='/private'>Private</S.CustomLink>
        </li>
        <li>
          <S.CustomLink onClick={handleClick} disabled={!isLogged} to='/dashboard'>Dashboard</S.CustomLink>
        </li>
      </ul>
      <S.Profile>
        <div>
          {isLogged === false ? (
            <Link to='/login'>Login</Link>
          ) : (
            <Link to='/login' onClick={() => logout()}>
              Logout
            </Link>
          )}
        </div>
        <S.Name>
          {isLogged === true ? (
            <div>
              <S.Icons>{profile}</S.Icons>
            </div>
          ) : (
            <p>Offline</p>
          )}
        </S.Name>
      </S.Profile>
    </S.Header>
  )
}

export default Header
