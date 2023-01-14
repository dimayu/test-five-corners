import { Routes, Route } from "react-router-dom";
import {
  PageCatalog,
  PageHome,
  PageAbout,
  PageShops,
  PageBasket,
  PageUser,
  PageFavorites } from '../../Pages';

import './Main.scss';

export const Main = ({setSumProducts}) => {
  
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<PageHome/>}/>
        <Route path="catalog" element={<PageCatalog/>}/>
        <Route path="about" element={<PageAbout/>}/>
        <Route path="shops" element={<PageShops/>}/>
        <Route path="basket"
               element={<PageBasket setSumProducts={setSumProducts}/>}/>
        <Route path="user" element={<PageUser/>}/>
        <Route path="favorites" element={<PageFavorites/>}/>
      </Routes>
    </main>
  );
};