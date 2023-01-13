import { useEffect, useState } from 'react';

import { BreadCrumbs, Form, Product, Result, FormMap } from '../../Components';
import data from '../../Data/DataProducts';
import user from '../../Data/FormData.json';

import './PageBasket.scss';

export const PageBasket = () => {
  useEffect(() => {}, [data])
  
  const [, setId] = useState();
  const handleClickId = (id) => {
    setId(id);
  }
  
  const sumPrice = data.products.reduce((acc, product) => (acc + product.price * product.quantity_ordered), 0);
  const sumProducts= data.products.reduce((acc, product) => (acc + product.quantity_ordered), 0);

  return (
    <div className="wrapper">
      <BreadCrumbs/>
      <form className="form">
        <div className="form__right">
          <div className="form__title">
            <h1 className="page-title">Оформление заказа</h1>
            <div className="form__login">
              <a href="#" className="form__login--account">Есть аккаунт?</a>
              <a href="#" className="form__login--sign">Войти</a>
            </div>
          </div>
          <div className="form__products">
            <h2 className="form__products--title">{sumProducts} товара на сумму {sumPrice.toLocaleString()} ₽</h2>
            {Boolean(data.products.length) ? data.products.map(product => (
              <Product key={product.id} id={product.id} {...product}
                       product={product}
                       handleClickId={handleClickId}/>
            )) : <h4 className="not-found">Nothing found</h4>}
          </div>
        </div>
        <div className="form__left">
          <Result sumPrice={sumPrice}
                  user={user.user}/>
        </div>
        <div className="form__right">
          <Form/>
        </div>
        <div className="form__left">
          <FormMap/>
        </div>
      </form>
    </div>
  );
};