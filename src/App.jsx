import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'

import Main from './componentes/Main'
import Footer from './componentes/Footer'
import SideBar from './componentes/SideBar'

import { get_image, get_random_image } from './services/nasa-api'

function App() {

  const [showModel, setShowModel] = useState(false)

  const [data, setData] = useState([])

  function handelToggleModel() {
    setShowModel(!showModel)
  }

//! the fetch in called 2 times
  useEffect(() => {
    async function get_image_from_api(){
      try {
        const IPOD = await get_image()
        setData(IPOD)
        console.log(IPOD)

      } catch (err) {
        console.log(err)
      }
    }
    get_image_from_api();
  
  }, []);


  return (
    <>
      <Main handelToggleModel={handelToggleModel} data={data}/>
      {showModel && (
        <SideBar handelToggleModel={handelToggleModel} data={data}/>
      )}
      <Footer handelToggleModel={handelToggleModel} data={data}/>
    </>
  )
}

export default App
