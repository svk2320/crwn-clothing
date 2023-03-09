import { Routes, Route} from 'react-router-dom'

import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/navigation.component';

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
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop/>} />
      </Route>
    </Routes>
  );
}

export default App;