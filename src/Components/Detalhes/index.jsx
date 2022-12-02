import React, {useState} from 'react'
import Trash from '../../Assets/trash-can.png'
import * as S from './style'

export default function Detalhes({label, onClick}) {

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <>
        <S.Button open={open} onClick={() => {toggleMenu()}}>
            <svg viewBox="0 0 100 100" width="45">
                <line x1="90" x2="10" y1="40" y2="40" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0">
                </line>
                <line x1="10" x2="90" y1="60" y2="60" strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0">
                </line>
            </svg>
            <span>Histórico de Cálculo</span>
       </S.Button>

       <S.Overlay open={open} onClick={() => {toggleMenu(false)}}></S.Overlay>

       <S.Historic open={open}>
       {/* Slice & Reverse, invertem a ordem dos resultados no histórico! */}
            <ul>{label !== '' ? 
                    label.slice(0).reverse().map((element, index) => {
                      return <li key={index}>{element}</li>;
                    }) 
                  : <li>Sem histórico!</li>}
            </ul>
            <button onClick={onClick}>
              <img src={Trash} alt="Trash Icon" />
            </button>
       </S.Historic>
    </>
  )
}
