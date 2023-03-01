import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.route";
import Authentication from "./routes/authentication/authentication.route";
import Navigation from "./components/navigation/navigation.component";


const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
}

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/authentication' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
