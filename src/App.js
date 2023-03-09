import { Routes, Route } from 'react-router-dom'

import Home from "./components/routes/home/home.component";

const Navigation = () =>{
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
    </div>
  )
}

const Shop = () => {
  return(
    <div>
      <h1>Shop page</h1>
    </div>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path='/home' element={<Home />} >
        <Route path='shop' element={<Shop/>} />
        <Route />
      </Route>
    </Routes>
  );
}

export default App;