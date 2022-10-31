import React from 'react'

const Filter = ({ game, type, gameChange, typeChange }) => {
  return (
    <div className='filter'>
        <select onChange={gameChange} defaultValue={game}>
            <option value="Animal Crossing">Animal Crossing</option>
            <option value="Super Mario">Super Mario</option>
            <option value="Super Smash Bros.">Super Smash Bros.</option>
            <option value="Mario Sports Superstars">Mario Sports Superstars</option>
            <option value="Pokemon">Pokemon</option>
            <option value="Kirby">Kirby</option>
        </select>
        <select onChange={typeChange} defaultValue={type}>
            <option value="Figure">Figure</option>
            <option value="Card">Card</option>
            <option value="Band">Band</option>
        </select>
    </div>
  )
}

export default Filter