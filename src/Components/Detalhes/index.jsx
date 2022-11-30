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
            <svg stroke="var(--bg-dark)" viewBox="0 0 100 100" width="45">
                <line open={open} x1="90" x2="10" y1="40" y2="40" stroke-width="10" stroke-linecap="round" stroke-dasharray="80" stroke-dashoffset="0">
                </line>
                <line open={open} x1="10" x2="90" y1="60" y2="60" stroke-width="10" stroke-linecap="round" stroke-dasharray="80" stroke-dashoffset="0">
                </line>
            </svg>
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
