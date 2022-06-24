/* eslint-disable react/prop-types */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'

const ProfCard = ({ profile }) => {
  const navigate = useNavigate()

  return (
    <S.Card onClick={() => navigate(`/user/${profile._id}`)}>
      <h3>{profile.username}</h3>
    </S.Card>
  )
}

export default ProfCard
