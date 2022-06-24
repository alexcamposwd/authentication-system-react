import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../../services/api'
import * as S from './styled'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [isSucess, setIsSucess] = useState(false)
  const [messages, setMessages] = useState()
  const regExpEmail = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i

  const registerSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username must contain at least 3 characters')
      .required('Email is required'),
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
  } = useForm({ resolver: yupResolver(registerSchema), mode: 'all' })

  const resetForm = () => {
    reset()
  }

  const createUser = async (value) => {
    try {
      const response = await api.post('/register', value)
      const { data } = response
      setMessages(data.message)
      setIsSucess(true)
      setTimeout(() => {
        navigate('/login')
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
    <S.Register>
      <S.WrapperForm data-cy='wapper-createUser'>
        <form onSubmit={handleSubmit(createUser)}>
          <h1>Create New User</h1>

          <label data-cy='lbl-username-createUser' htmlFor='username'>
            Username
          </label>
          <input
            type='text'
            name='username'
            data-cy='inp-username-createUser'
            placeholder='Enter your Username'
            {...register('username', { required: true })}
          />
          {errors?.username && (
            <span data-cy='error-username-createUser'>
              {errors.username.message}
            </span>
          )}

          <label data-cy='lbl-email-createUser' htmlFor='email'>
            E-mail
          </label>
          <input
            type='email'
            name='email'
            data-cy='inp-email-createUser'
            placeholder='Enter your E-mail'
            {...register('email', { required: true })}
          />
          {errors?.email && (
            <span data-cy='error-email-createUser'>{errors.email.message}</span>
          )}

          <label data-cy='lbl-password-createUser' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            name='password'
            data-cy='inp-password-createUser'
            placeholder='Enter your Password'
            {...register('password', { required: true })}
          />
          {errors?.password && (
            <span data-cy='error-password-createUser'>
              {errors.password.message}
            </span>
          )}

          <label data-cy='lbl-role-createUser' htmlFor='role'>
            Role
          </label>
          <select
            name='role'
            placeholder='Enter your Role'
            {...register('role')}
          >
            <option value='user'>user</option>
            <option value='admin'>admin</option>
          </select>

          <S.FieldButton>
            <button>Register</button>
            <p>
              Already registered?
              <br />
              <span className='line'>
                <Link to='/login'>Sign In</Link>
              </span>
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
    </S.Register>
  )
}

export default RegisterPage
