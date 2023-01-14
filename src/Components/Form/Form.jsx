import { useEffect, useState } from 'react';

import './Form.scss';

export const Form = ({addFormDataHandler}) => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pay, setPay] = useState("cash");
  const [comment, setComment] = useState("");
  
  useEffect(() => {
    addFormDataHandler(name, secondName, phone, email, address, pay, comment);
  }, [name, secondName, phone, email, address, pay, comment])
  
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSecondName = (e) => {
    setSecondName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const changeValue = (e) => {
    setPay(e.target.value);
  }
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  
  return (
    <>
      <h2 className="page-subtitle">Контактные данные</h2>
      <div className="form__contacts">
        <div className="form__contacts__container">
          <input className="form__contacts__container--input"
                 value={name}
                 onChange={handleName}
                 name="name"
                 type="text"
                 placeholder=" "/>
          <label
            className="form__contacts__container--placeholder"
            htmlFor="name">
            Имя
          </label>
        </div>
        <div className="form__contacts__container">
          <input className="form__contacts__container--input"
                 value={secondName}
                 onChange={handleSecondName}
                 name="secondName"
                 type="text"
                 placeholder=" "/>
          <label
            className="form__contacts__container--placeholder"
            htmlFor="secondName">
            Фамилия
          </label>
        </div>
        <div className="form__contacts__container">
          <input className="form__contacts__container--input"
                 value={phone}
                 onChange={handlePhone}
                 name="phone"
                 type="text"
                 placeholder=" "/>
          <label
            className="form__contacts__container--placeholder"
            htmlFor="phone">
            Телефон
          </label>
        </div>
        <div className="form__contacts__container">
          <input className="form__contacts__container--input"
                 value={email}
                 onChange={handleEmail}
                 name="email"
                 type="text"
                 placeholder=" "/>
          <label
            className="form__contacts__container--placeholder"
            htmlFor="email">
            Email
          </label>
        </div>
        <div className="form__contacts__container form__contacts__container--address">
          <input className="form__contacts__container--input"
                 value={address}
                 onChange={handleAddress}
                 name="address"
                 type="text"
                 placeholder=" "/>
          <label
            className="form__contacts__container--placeholder"
            htmlFor="address">
            Адрес доставки
          </label>
        </div>
      </div>
      <h3 className="page-subtitle">Оплата</h3>
      <div className="form__contacts__radio">
        <input type="radio"
               id="cash"
               value="cash"
               name="pay"
               checked={pay === 'cash'}
               onChange={changeValue}
        />
        <label htmlFor="cash">Наличными курьеру</label>
      </div>
      <div className="form__contacts__radio">
        <input type="radio"
               id="card"
               value="card"
               name="pay"
               checked={pay === 'card'}
               onChange={changeValue}
        />
        <label htmlFor="card">Картой курьеру</label>
      </div>
      <div className="form__contacts__radio">
        <input type="radio"
               id="online"
               value="online"
               name="pay"
               checked={pay === 'online'}
               onChange={changeValue}
        />
        <label htmlFor="online">Картой онлайн</label>
      </div>
      <h3 className="page-subtitle">Комментарий к заказу</h3>
      <div className="form__contacts__container form__contacts__container--comment">
        <input className="form__contacts__container--input"
               value={comment}
               onChange={handleComment}
               name="comment"
               type="text"
               placeholder=" "/>
        <label
          className="form__contacts__container--placeholder"
          htmlFor="comment">
          Комментарий к заказу
        </label>
      </div>
      <p className="form__contacts__container--comment--symbol">Использовано 0/142 символов</p>
    </>
  );
};