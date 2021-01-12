import { useState } from 'react';
import { ShoppingBody } from './components/shopping-body';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
function App() {
  let [cartItems, setCartItems] = useState([]);
  const getCartItems = () => {
    return cartItems.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  };

  const addItem = (item) => {
    let itemExist = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemExist) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...itemExist, quantity: itemExist.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (item) => {
    let itemToRemove = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemToRemove.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route
          path='/shopping_cart/'
          exact
          render={(props) => <ShoppingBody {...props} />}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
