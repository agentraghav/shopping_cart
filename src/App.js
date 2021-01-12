import { useState } from 'react';
import { ShoppingBody } from './components/shopping-body';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Shop } from './components/shop';
import { About } from './components/about';
import { Item } from './components/item';
import { Cart } from './components/cart';
function App() {
  let [cartItems, setCartItems] = useState([]);
  const getCartItems = () => {
    return cartItems.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  };
  const resetCart = () => {
    setCartItems([]);
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
      <Header getCartItems={getCartItems} />
      <Switch>
        <Route path='/' exact render={(props) => <ShoppingBody {...props} />} />
        <Route path='/shop' exact render={(props) => <Shop {...props} />} />
        <Route path='/about' exact render={(props) => <About {...props} />} />
        <Route
          path='/shop/:itemID'
          render={(props) => <Item {...props} addItem={addItem} />}
        />

        <Route
          exact
          path='/cart'
          render={(props) => (
            <Cart
              {...props}
              cartItems={cartItems}
              removeItem={removeItem}
              addItem={addItem}
              getCartItems={getCartItems}
              resetCart={resetCart}
            />
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
