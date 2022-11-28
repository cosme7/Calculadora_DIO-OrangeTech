import React from 'react'
import Input from './Components/Input'
import Button from './Components/Button'
import * as S from './Style/style'

export default function App() {
  return (
    <>
      <S.Container>
        <Input />
        <S.Wrapper>
          <Button title="C" outros="primary" />
          <Button title="+/-" outros="primary"/> 
          <Button title="%" outros="primary" /> 
          <Button title="÷" variant="primary"/> 
          {/*  */}
          <Button title="7" /> 
          <Button title="8" /> 
          <Button title="9" /> 
          <Button title="X" variant="primary"/> 
          {/*  */}
          <Button title="4" /> 
          <Button title="5" /> 
          <Button title="6" /> 
          <Button title="-" variant="primary" /> 
          {/*  */}
          <Button title="1" /> 
          <Button title="2" /> 
          <Button title="3" /> 
          <Button title="+" variant="primary" /> 
          {/*  */}
          <Button title="0" grid="primary" /> 
          <Button title="," /> 
          <Button title="=" variant="primary" /> 
          {/*  */}
        </S.Wrapper>
      </S.Container>
    </>
  );
};
