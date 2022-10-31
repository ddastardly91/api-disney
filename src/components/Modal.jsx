import React from 'react'
import './Modal.css'

const Modal = ({data, onClick}) => {

  return (
    <div className='modal-background' onClick={onClick}>
        <div className='modal'>
            <img src={data.image} alt={data.name} />
            <h1>{data.name}</h1>
            <h3>This character is from the game series <strong>{data.gameSeries}</strong></h3>
            <h3>Amiibo Release Dates:</h3>

            { data.release.eu &&
            <p>Europe: <strong>{data.release.eu}</strong></p>
            }
            { data.release.na &&
            <p>North America: <strong>{data.release.na}</strong></p>
            }
            { data.release.jp &&
            <p>Japan: <strong>{data.release.jp}</strong></p>
            }
            { data.release.au &&
            <p>Australia: <strong>{data.release.au}</strong></p>
            }
            <button onClick={onClick}>Close</button>
        </div>
    </div>
  )
}

export default Modal