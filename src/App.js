import React, { useState } from 'react'
import data from './data'
import data2 from './data2'
import Facts from './facts'
import Flip from './flip'
function App() {
  const [places, setPlaces] = useState(data)
  // const [facts, setFacts] = useState(data2)
  return (
    <main>

      <Facts />
      <section className='container'>
      <Flip places={places} />

      </section>
    </main>
  )
}

export default App
