import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import ItemDetailPage from './components/ItemDetailPage';
import InputTask from "./components/InputTask";
import './App.css'

const App = () => {
  const [data, setData] = useState(null)
  const urlAPI = 'http://localhost:3000'

  const fetchData = async() => {
    try {
      const response = await fetch(urlAPI)
      const json = await response.json()
      setData(json)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [data])

  return (
  <Router>
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/create' >Add task</Link>
      </nav>
      {data === null ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/create' element={<InputTask />} />
          {data.map(task => (
            <Route key={task._id} path={`/${task._id}`} element={<ItemDetailPage task={task} />} />
          ))}
        </Routes>
      )}
    </div>
  </Router>   
  )
};

export default App;
