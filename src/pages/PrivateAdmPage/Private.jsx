import React from 'react'
import Background from '../../components/Background'
import * as S from './styled'

const PrivatePage = () => {
  const img_link =
    'https://images.unsplash.com/photo-1653503873090-345317938c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'
  const blurN = 28

  return (
    <S.Private>
      <Background imgUrl={img_link} blur={blurN} />
      <h2>Example Private Page</h2>
      <h2>Authorization Role Administrator</h2>
    </S.Private>
  )
}

export default PrivatePage
