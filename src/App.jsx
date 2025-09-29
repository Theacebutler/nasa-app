import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'

import Main from './componentes/Main'
import Footer from './componentes/Footer'
import SideBar from './componentes/SideBar'

import { get_image } from './services/nasa-api'

function App() {

  const [showModel, setShowModel] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)



  function handelToggleModel() {
    setShowModel(!showModel)
  }

  useEffect(() => {
    async function get_image_from_api() {

      const Today = (new Date()).toDateString();
      const todayKey = `NASA-${Today}`
      if (localStorage.getItem(todayKey)){
        const localData = JSON.parse(localStorage.getItem(todayKey))
        setData(localData)
        return
      }
      localStorage.clear()

      try {
        const data = await get_image()
        setData(data)
        localStorage.setItem(todayKey, JSON.stringify(data))
      } catch (err) {
        console.log(err)
      }
    }
    setLoading(false)

    get_image_from_api();
  }, []);


  return (
    <>
      {!loading ? (
        <>
          <Main handelToggleModel={handelToggleModel} data={data} />
          {showModel && (
            <SideBar handelToggleModel={handelToggleModel} data={data} />
          )}
          <Footer handelToggleModel={handelToggleModel} data={data} setData={setData} setLoading={setLoading} />
        </>
      ) :
        (<div className="loading">
          <i className="fa-solid fa-gear"></i>
        </div>)
      }
    </>
  )
}

export default App
