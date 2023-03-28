import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// IMPORT STATE/PROVIDER HOOKS
import { useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase-auth.utils";
import { setCurrentUser } from "./store/user/user.actions";

// IMPORT COMPONENT ROUTES
import Home from "./routes/home/home.route";
import Authentication from "./routes/authentication/authentication.route";
import Navigation from "./components/navigation/navigation.component";
import Shop from "./routes/shop/shop.route";
import UserBasket from "./routes/user-basket/user-basket.route";

const App = () => {
  // This is a hook that allows us to dispatch actions to the store, it never changes state.
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    })
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/shopping-cart' element={<UserBasket />} />
      </Route>
    </Routes>
  );
}

export default App;
