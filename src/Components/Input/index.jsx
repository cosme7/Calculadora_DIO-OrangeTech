import React from 'react'
import * as S from './style'

export default function Input({value}) {
  return (
    <>
        <S.Input disabled value={value}/>
    </>
  )
}
