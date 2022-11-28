import React from 'react'
import * as S from './style'

export default function Button({title, variant="operador", outros="others",grid="tamanho" ,OnClick}) {
  return (
    <>
        <S.Button variant={variant} outros={outros} grid={grid} onClick={OnClick}>
          {title}
        </S.Button>
    </>
  )
}
