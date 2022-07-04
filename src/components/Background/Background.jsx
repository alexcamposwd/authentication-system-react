import React from 'react'
import * as S from './styled'

const index = ({ imgUrl, blur }) => {
  return (
    <S.BackImg imgUrl={imgUrl}>
      <S.Blur blur={blur}></S.Blur>
    </S.BackImg>
  )
}

export default index
