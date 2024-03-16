import { useState } from 'react'
import DataLedpart2 from './Components/DataLedpart2'
import DataLedpart3 from './Components/DataLedpart3'
import Datavideopart from './Components/Datavideopart'
import DataLedpart4 from './Components/DataLedpart4'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DataLedpart2/>
    <DataLedpart3/>
    <Datavideopart/>
    <DataLedpart4/>
    <FAQ/>
    <Footer/> 
    </>
  )
}

export default App
