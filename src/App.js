import { useEffect, useState } from 'react'
import Amiibo from './components/Amiibo'
import Modal from './components/Modal'
import Filter from './components/Filter'

import './App.css'

const App = () => {
const [amiibos, setAmiibos] = useState([])
const [showModal, setShowModal] = useState(false)
const [card, setCard] = useState({})
const [filter, setFilter] = useState({
  type: 'Card',
  series: 'Animal Crossing'
})

useEffect(() => {
  const fetchData = async () => {
    await fetch(`https://www.amiiboapi.com/api/amiibo/?gameseries=${filter.series}`)
      .then(res => res.json())
      .then(data => setAmiibos(data.amiibo.filter((amiibo => amiibo.type == `${filter.type}`))))
  }

  fetchData()
    .catch((err) => console.log(err.message))

}, [filter])

const onClickHandler = (index) => {
  setShowModal(!showModal)

  !showModal
    ? setCard({
      name: amiibos[index].name,
      image: amiibos[index].image,
      gameSeries: amiibos[index].gameSeries,
      release: amiibos[index].release
      })
    : setCard({})
}

const onGameChangeHandler = (e) => {
  setFilter({
    ...filter,
    series: e.target.value
  })
}

const onTypeChangeHandler = (e) => {
  setFilter({
    ...filter,
    type: e.target.value
  })
}

  return (
    <div className="App">
      {showModal &&
      <Modal data={card} onClick={onClickHandler} />
      }
      <h1>Amiibo Encyclopedia</h1>
      <Filter game={filter.series} type={filter.type} gameChange={onGameChangeHandler} typeChange={onTypeChangeHandler} />
      {amiibos.length ? 
      <Amiibo data={amiibos} onClick={onClickHandler} />
      : <h1>No content</h1>}
    </div>
  )
}

export default App