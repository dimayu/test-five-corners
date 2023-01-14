import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Header, Footer, Main } from '../index';
import './App.scss';

export const App = () => {
  const [sumProducts, setSumProducts] = useState(2);
  
  useEffect(() => {
    setSumProducts(sumProducts);
  }, [sumProducts]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header sumProducts={sumProducts}/>
        <Main setSumProducts={setSumProducts}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};
