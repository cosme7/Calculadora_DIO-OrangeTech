import React from 'react'
import * as S from './style'

export default function Button({label, variant="operator", clrGrey="greyClr", align="size", onClick}) {
  return (
    <>
        <S.Button 
        variant={variant} 
        clrGrey={clrGrey} 
        align={align} 
        onClick={onClick} 
        type="button">
          {label}
        </S.Button>
    </>
  )
}
