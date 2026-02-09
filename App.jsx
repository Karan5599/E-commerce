
import './App.css'
import Header from './header/Header'
import Home from './home/Home'
import React from 'react';
import Checkout from './checkout/Checkout';
import{ BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import ProductItem from './produnctItem/ProductItem';
import Context from './states/Context';

function App() {

  return (
    <Context>
      <Router>
        <Routes>

        <Route 
        path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route 
        path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
        path='/productitem'
        element={
          <>
            <Header />
            <ProductItem/>
          </>
        }
        />
      </Routes>
    </Router>
    </Context>
  )
}

export default App
