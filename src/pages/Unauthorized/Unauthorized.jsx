import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'

const Unauthorized = () => {
  const navigate = useNavigate()

  const goBack = () => navigate('/home')

  return (
    <S.UnAuth>
      <h1>Unauthorized</h1>
      <br />
      <p>You do not have access to the requested page.</p>
      <div>
        <button onClick={goBack}>Go Back</button>
      </div>
    </S.UnAuth>
  )
}

export default Unauthorized
