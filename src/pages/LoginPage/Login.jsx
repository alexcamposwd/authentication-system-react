import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../../services/api'
import { useAuth } from '../../contexts/AuthContext'
import Background from '../../components/Background'
import * as S from './styled'

const LoginPage = () => {
  const navigate = useNavigate()
  const [isSucess, setIsSucess] = useState(false)
  const [messages, setMessages] = useState()
  const { setAuth } = useAuth()
  const regExpEmail = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i

  const img_link =
    'https://images.unsplash.com/photo-1655047273143-91261102716f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  const blurN = 15

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .matches(regExpEmail, 'Invalid email address')
      .required('Email is required'),
    password: yup
      .string()
      .min(5, 'Password must contain at least 5 characters')
      .max(22, 'Password must contain at least 5 characters')
      .required('Password is Required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(loginSchema), mode: 'all' })

  const resetForm = () => {
    reset()
  }

  const loginUser = async (value) => {
    try {
      const response = await api.post('/login', value)
      const { data } = response
      const token = data.token
      const profile = data.user

      localStorage.setItem('token', token)
      api.defaults.headers.Authorization = `Bearer ${token}`

      setAuth(profile)
      setMessages(data.message + ` ${profile.username}`)
      setIsSucess(true)
      setTimeout(() => {
        navigate('/home')
        setIsSucess(false)
      }, 2000)
    } catch (error) {
      const { data } = error.response
      setMessages(data.message)
      setIsSucess(false)
      setTimeout(() => {
        resetForm()
        setMessages('')
      }, 3000)
    }
  }

  return (
    <S.Login>
      <Background imgUrl={img_link} blur={blurN} />
      <S.WrapperForm data-cy='wapper-loginUser'>
        <form onSubmit={handleSubmit(loginUser)}>
          <h1>Login User</h1>

          <label data-cy='lbl-email-loginUser' htmlFor='email'>
            E-mail
          </label>
          <input
            type='email'
            name='email'
            data-cy='inp-email-loginUser'
            placeholder='Enter your E-mail'
            {...register('email', { required: true })}
          />
          {errors?.email && (
            <span data-cy='error-email-loginUser'>{errors.email.message}</span>
          )}

          <label data-cy='lbl-password-loginUser' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            name='password'
            data-cy='inp-password-loginUser'
            placeholder='Enter your Password'
            {...register('password', { required: true })}
          />
          {errors?.password && (
            <span data-cy='error-password-loginUser'>
              {errors.password.message}
            </span>
          )}

          <S.FieldButton>
            <button>Login</button>
            <p>
              Need an Account?
              <br />
              <h3>
                <Link to='/register'>Sign Up</Link>
              </h3>
            </p>
          </S.FieldButton>

          <S.FieldError>
            {isSucess === true ? (
              <S.MsgSucess>{messages}</S.MsgSucess>
            ) : (
              <S.MsgError>{messages}</S.MsgError>
            )}
          </S.FieldError>
        </form>
      </S.WrapperForm>
    </S.Login>
  )
}

export default LoginPage
