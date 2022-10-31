import React from 'react'
import './Amiibo.css'

const Amiibo = ({ data, onClick }) => {
  return (
    <div className="amiibo">
        {data.map((amiibo, index) => {
            return (
                <img onClick={() => onClick(index)} key={index} style={{height: '150px', margin: '10px'}} src={amiibo.image} alt={amiibo.tail} />
            )
      })}
    </div>
  )
}

export default Amiibo