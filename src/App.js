import { ShoppingBody } from './components/shopping-body';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={ShoppingBody} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
