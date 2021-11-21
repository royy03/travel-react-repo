import React, { useState } from 'react'
import data from './data'
import data2 from './data2'
import Facts from './facts'
import Flip from './flip'
import ScrollToTop from './ScrollToTop';
function App() {
  const [places, setPlaces] = useState(data)
  // const [facts, setFacts] = useState(data2)
  return (
    <main>

      <Facts />
      <ScrollToTop/>
      <section className='container'>
      <Flip places={places} />

      </section>
    </main>
  )
}

export default App
