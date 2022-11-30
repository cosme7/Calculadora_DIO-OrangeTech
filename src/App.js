import React, {useState} from 'react'
import Detalhes from './Components/Detalhes'
import Input from './Components/Input'
import Button from './Components/Button'
import * as S from './Style/style'

export default function App() {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState('');
  const [results, setResults] = useState('');

  //* Pega o valor no click do número e armazena no setCurrentNumber
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  };

  //* Função que lida com os operadores.
  const operatorHandler = (e) => {
      setOperator(e)
      setFirstNumber (currentNumber)
      setCurrentNumber('0')
  };

  //* Converte a String em Número.
  const fixNumbers = (num) => {
    if (num % 1 !== 0) {
      return parseFloat(num.toFixed(5))
    } else {
      return num;
    }
  };

  //* Função que faz o cálculo de cada operação.
  //* 1º const: Sinaliza ao Js que é um número, já que estamos cálculando por String.
  //* 2º const: Pega o valor dá 1º const e põe pra função fixNumbers.
  //* 3º const: Pega o cálculo do 1º const e põe ele pra 2º const.
  //* 4º : Põe o resultado do cálculo do setResults, dá um desestruturada nos resultados
  //* ... podendo re-utilizar para fazer cálculo de outra operação
  //* 5º Põe o resultado da operação na tela, através do setCurrentNumber convertendo pra String.
  //* 6º Zera o próximo número (setFirstNumber), para o próximo cálculo.
  const calcHandler = () => {
    if( operator === "/" ){
        const divCalc = Number(firstNumber) / Number(currentNumber)
        const divFixed = fixNumbers(divCalc)
        const divString = `${firstNumber} / ${currentNumber} = ${divFixed}`;
        setResults (results => [...results, divString] );
        setCurrentNumber(String(divCalc))
        setFirstNumber('0')
    }else if( operator === "*" ){
        const multCalc = Number(firstNumber) * Number(currentNumber)
        const multFixed = fixNumbers(multCalc)
        const multString = `${firstNumber} * ${currentNumber} = ${multFixed}`;
        setResults (results => [...results, multString] );
        setCurrentNumber(String(multCalc))
        setFirstNumber('0')
    }else if( operator === "-" ){
        const minusCalc = Number(firstNumber) - Number(currentNumber)
        const minusFixed = fixNumbers(minusCalc)
        const minusString = `${firstNumber} - ${currentNumber} = ${minusFixed}`;
        setResults (results => [...results, minusString] );
        setCurrentNumber(String(minusCalc))
        setFirstNumber('0')
    }else if( operator === "+" ){
        const somaCalc = Number(firstNumber) + Number(currentNumber)
        const somaFixed = fixNumbers(somaCalc)
        const somaString = `${firstNumber} + ${currentNumber} = ${somaFixed}`;
        setResults (results => [...results, somaString] );
        setCurrentNumber(String(somaCalc))
        setFirstNumber('0')
    }
  };

  //* Limpa os resultados. 
  const handleClear = () => {
      setCurrentNumber('0')
      setFirstNumber('0')
      setOperator('')
  };

  //* Inverte o sinal de mais pra menos e vice-versa.
  const signChange = () => {
      setCurrentNumber (currentNumber * -1)
  };

  //* Cálculo de porcentagem.
  const percentual = () => {
      setCurrentNumber (currentNumber / 100)
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.InputWrapper>
            <Detalhes label={results} onClick={() => setResults('')}/>
            <Input value={currentNumber} />
          </S.InputWrapper>
          <Button label="C" clrGrey="primary" onClick={() => handleClear()} />
          <Button label="+/-" clrGrey="primary" onClick={() => signChange()} /> 
          <Button label="%" clrGrey="primary" onClick={() => percentual()} /> 
          <Button label="÷" variant="primary" onClick={() => operatorHandler('/')} /> 
          {/*  */}
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} /> 
          <Button label="9" onClick={() => handleAddNumber('9')} /> 
          <Button label="X" variant="primary" onClick={() => operatorHandler('*')} /> 
          {/*  */}
          <Button label="4" onClick={() => handleAddNumber('4')} /> 
          <Button label="5" onClick={() => handleAddNumber('5')} /> 
          <Button label="6" onClick={() => handleAddNumber('6')} /> 
          <Button label="-" variant="primary" onClick={() => operatorHandler('-')} /> 
          {/*  */}
          <Button label="1" onClick={() => handleAddNumber('1')} /> 
          <Button label="2" onClick={() => handleAddNumber('2')} /> 
          <Button label="3" onClick={() => handleAddNumber('3')} /> 
          <Button label="+" variant="primary" onClick={() => operatorHandler('+')} /> 
          {/*  */}
          <Button label="0" align="primary" onClick={() => handleAddNumber('0')} /> 
          <Button label="," onClick={() => handleAddNumber('.')} /> 
          <Button label="=" variant="primary" onClick={() => calcHandler()} /> 
          {/*  */}
        </S.Wrapper>
      </S.Container>
    </>
  );
};
