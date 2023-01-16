import { useState } from 'react';

import './Result.scss';

export const Result = ({sumPrice, user, addFormDataResultHandler, formValid}) => {
  const {
    sale,
    promotion,
    promo_code,
    delivery
  } = user;
  
  const sum = (sumPrice - sale - promotion - promo_code + delivery).toLocaleString();
  
  const [stock, setStock] = useState(false);
  addFormDataResultHandler(sumPrice, sale, promotion, promo_code, delivery, stock, sum);
  
  return (
    <div className="form__results">
      <div className="form__results__item form__results__item--product">
        <span>Товары</span>
        <span>{sumPrice.toLocaleString()}</span>
      </div>
      <div className="form__results__item form__results__item--sale">
        <span>Скидка</span>
        <span>- {sale.toLocaleString()} ₽</span>
      </div>
      <div className="form__results__item form__results__item--promotion">
        <span>Акции</span>
        <span>- {promotion.toLocaleString()} ₽</span>
      </div>
      <div className="form__results__item form__results__item--promo-code">
        <span>Промокод</span>
        <span>- {promo_code.toLocaleString()} ₽</span>
      </div>
      <div className="form__results__item form__results__item--delivery">
        <span>Доставка</span>
        <span>{delivery.toLocaleString()} ₽</span>
      </div>
      <div className="form__results__item form__results__item--checkbox">
        <div>
          <span>Получить товар со склада</span>
          <p>Сроки получения могут измениться</p>
        </div>
        <input type="checkbox"
               className="switch"
               checked={stock}
               onChange={() => setStock(!stock)}
        />
      </div>
      <div className="form__results__item form__results__item--result">
        <span>Итого:</span>
        <span>{sum} ₽</span>
      </div>
      <div className="form__results__item form__results__item--input">
        <input type="text" placeholder="Введите промокод"/>
      </div>
      <button className="btn" disabled={formValid}>Оформить заказ</button>
      <div className="form__results__item form__results__item--conf">
        <p>Нажимая кнопку “Оформить заказ”, Вы соглашаетесь с <a href="#">политикой конфиденциальности</a>.</p>
      </div>
    </div>
  );
};