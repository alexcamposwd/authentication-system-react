import React from 'react'
import Background from '../../components/Background'
import * as S from './styled'

const PrivatePage = () => {
  const img_link =
    'https://images.unsplash.com/photo-1656480993144-3d735f3a12ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  const blurN = 25

  return (
    <S.Private>
      <Background imgUrl={img_link} blur={blurN} />
      <h2>Example Private Page</h2>
      <h2>Authorization all Roles</h2>
    </S.Private>
  )
}

export default PrivatePage
