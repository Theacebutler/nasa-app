import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'

import Main from './componentes/Main'
import Footer from './componentes/Footer'
import SideBar from './componentes/SideBar'
import LikedImages from './componentes/LikedImages'
import { get_image } from './services/nasa-api'

function App() {

  const [showModel, setShowModel] = useState(false)
  const [showLiked, setShowLiked] = useState(true)
  const [data, setData] = useState([])
  const [liked, setLiked] = useState()
  function handelToggleModel() {
    setShowModel(!showModel)
  }

  useEffect(() => {
    async function get_image_from_api() {
      try {
        const data = await get_image()
        setData(data)

      } catch (err) {
        console.log(err)
      }
    }
    get_image_from_api();

  }, []);


  return (
    <>
      {showLiked && <LikedImages liked={liked}/>}
      <Main handelToggleModel={handelToggleModel} data={data} />
      {showModel && (
        <SideBar handelToggleModel={handelToggleModel} data={data} />
      )}
      <Footer handelToggleModel={handelToggleModel} data={data} setData={setData} setLiked={setLiked} liked={liked}/>
    </>
  )
}

export default App
