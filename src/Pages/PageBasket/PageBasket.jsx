import { useEffect, useState } from 'react';

import { BreadCrumbs, Form, Product, Result, FormMap } from '../../Components';
import data from '../../Data/DataProducts';
import user from '../../Data/FormData.json';

import './PageBasket.scss';

export const PageBasket = ({setSumProducts}) => {
  const sumPrice = data.products.filter(e => !e.deleted).reduce((acc, product) => (acc + product.price * product.quantity_ordered), 0);
  const sumProduct = data.products.filter(e => !e.deleted).reduce((acc, product) => (acc + product.quantity_ordered), 0);
  
  const [id, setId] = useState();
  
  const [formData, setFormData] = useState([]);
  const [formValid, setFormValid] = useState(true);
  
  useEffect(() => {
    setId(id)
  }, [id])
  
  const handleClickId = (id) => {
    setId(id);
  }
  
  useEffect(() => {
    setSumProducts(sumProduct);
  }, [sumProduct, id, sumPrice, sumProduct]);
  
  const addFormDataHandler = (name, secondName, phone, email, address, pay, comment) => {
    const formData = {
        name: name,
        secondName: secondName,
        phone: phone,
        email: email,
        address: address,
        pay: pay,
        comment: comment,
      }
    setFormData([formData]);
  };
  
  let formResult;
  
  const addFormDataResultHandler = (sum, sale, promotion, promo_code, delivery, stock, result) => {
    formResult = {
      sum: sum,
      sale: sale,
      promotion: promotion,
      promo_code: promo_code,
      delivery: delivery,
      stock: stock,
      result: result,
    }
  };
  
  let formProducts = [];
  
  const addFormProductsResultHandler = (formProduct) => {
    formProducts.push(formProduct);
  };
  
  const isValidForm = (valid) => {
    setFormValid(valid);
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    formData.push(formResult);
    formData.unshift(formProducts
      .filter(e => !e.deleted)
      .filter((el => f => !el.has(f.id) && el.add(f.id))(new Set())));
    console.log(formData.filter((e,index) => JSON.stringify(e) !== JSON.stringify(e[index++])));
  };

  return (
    <div className="wrapper">
      <BreadCrumbs/>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__right">
          <div className="form__title">
            <h1 className="page-title">Оформление заказа</h1>
            <div className="form__login">
              <a href="#" className="form__login--account">Есть аккаунт?</a>
              <a href="#" className="form__login--sign">Войти</a>
            </div>
          </div>
          <div className="form__products">
            <h2 className="form__products--title">{sumProduct} товара на сумму {sumPrice.toLocaleString()} ₽</h2>
            {Boolean(data.products.length) ? data.products.map(product => (
              <Product key={product.id} id={product.id} {...product}
                       product={product}
                       handleClickId={handleClickId}
                       addFormProductsResultHandler={addFormProductsResultHandler}
              />
            )) : <h4 className="not-found">Nothing found</h4>}
          </div>
        </div>
        <div className="form__left">
          <Result sumPrice={sumPrice}
                  user={user.user}
                  addFormDataResultHandler={addFormDataResultHandler}
                  formValid={formValid}
          />
        </div>
        <div className="form__right">
          <Form addFormDataHandler={addFormDataHandler}
                isValidForm={isValidForm}
          />
        </div>
        <div className="form__left">
          <FormMap/>
        </div>
      </form>
    </div>
  );
};