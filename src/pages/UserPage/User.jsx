import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../contexts/AuthContext'
import Background from '../../components/Background'
import * as S from './styled'

const UserPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { auth, logout } = useAuth()
  const [userLog, setUserLog] = useState()

  const img_link =
    'https://images.unsplash.com/photo-1559654663-0a9e41db6e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80'
  const blurN = 28

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
      try {
        const { data } = await api.get(`/user/${id}`, config)
        setUserLog(data)
      } catch (error) {
        console.error(error)
      }
    }
    if (auth.role === 'admin' || auth._id === id) {
      getUser()
    } else {
      alert('Não autorizado')
    }
  }, [auth])

  if (!userLog) {
    return <h1>Loading...</h1>
  }

  // Convert date to pt-BR pattern
  const dataInput = userLog.user.createdAt
  const dataOrig = new Date(dataInput)
  const dataFormatada = dataOrig.toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  })

  // Delete Profile - User
  const handleDelete = async () => {
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
    if (id) {
      await api.delete(`/deluser/${id}`, config)
      if (auth.role === 'admin') {
        alert('User successfully deleted!')
        navigate('/profiles')
      } else {
        alert('User successfully deleted!')
        logout()
        navigate('/home')
      }
    }
  }

  return (
    <S.User>
      <Background imgUrl={img_link} blur={blurN} />
      <S.Field>
        <h3>
          Username: <span>{userLog.user.username}</span>
        </h3>
        <p>
          Email: <span>{userLog.user.email}</span>
        </p>
        <p>
          Role: <span>{userLog.user.role}</span>
        </p>
        <p>
          Registro: <span>{dataFormatada}</span>
        </p>
        <S.Icons>
          {/* <S.CustomUserEdit /> */}
          <S.CustomUserDel onClick={() => handleDelete(id)} />
        </S.Icons>
      </S.Field>
    </S.User>
  )
}

export default UserPage
