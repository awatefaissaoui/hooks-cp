import { useState, useEffect } from 'react'
import './App.css'
import Liste from './components/List'
import Navbar from './components/Navbar'
import Fromename from './components/Frome'
import Filter from './components/Filter'
function App() {
  const [movies, setmovies] = useState([]);
  const [filtred, setFiltred] = useState([])



  async function get_data() {
    const response = await fetch("http://localhost:3000/movies");
    const data = await response.json();
    setmovies(data)
  }


  useEffect(() => {
    get_data()
  }, []);

  return (

    <>
      <Navbar />

      {window.location.pathname == "/"  && <> <Filter setFiltred={setFiltred} movies={movies} /><Liste movies={filtred.length == 0 ? movies : filtred} /></>}
      {window.location.pathname == "/new" && <Fromename />}



    </>
  )
}

export default App
