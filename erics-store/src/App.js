import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.route";
import Authentication from "./routes/authentication/authentication.route";
import Navigation from "./components/navigation/navigation.component";
import Shop from "./routes/shop/shop.route";
import UserBasket from "./routes/user-basket/user-basket.route";

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/shopping-cart' element={<UserBasket />} />
      </Route>
    </Routes>
  );
}

export default App;
