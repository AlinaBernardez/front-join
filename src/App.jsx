import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ItemDetailPage from "./ItemDetailPage";

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
    console.log(data)
  }, [])

  return (
  <Router>
    <div>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      {data === null ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path='/' element={<Home data={data} />} />
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
