import React from 'react'
import Background from '../../components/Background'
import * as S from './styled'

const HomePage = () => {
  const img_link =
    'https://images.unsplash.com/photo-1654933922741-1d0f3e758055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  const blurN = 0

  return (
    <S.Home>
      <Background imgUrl={img_link} blur={blurN} />
      <h1>HomePage</h1>
    </S.Home>
  )
}

export default HomePage
