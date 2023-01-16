import { useEffect, useState } from 'react';

import './Form.scss';

export const Form = ({addFormDataHandler, isValidForm}) => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pay, setPay] = useState("cash");
  const [comment, setComment] = useState("");
  const [formValid, setFormValid] = useState(true);
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("Заполните поле");
  const [secondNameDirty, setSecondNameDirty] = useState(false);
  const [secondNameError, setSecondNameError] = useState("Заполните поле");
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState("Заполните поле");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Заполните поле");
  const [addressDirty, setAddressDirty] = useState(false);
  const [addressError, setAddressError] = useState("Заполните поле");
  const [commentError, setCommentError] = useState("Заполните поле");
  
  useEffect(() => {
    addFormDataHandler(name, secondName, phone, email, address, pay, comment);
  }, [name, secondName, phone, email, address, pay, comment]);
  
  useEffect(() => {
    if ((emailError || nameError || secondNameError || phoneError || addressError) &&
        (emailDirty || nameDirty || secondNameDirty || phoneDirty || addressDirty)) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
    isValidForm(formValid);
  }, [nameError, secondNameError, addressError, phoneError, emailError])
  
  const handleName = (e) => {
    setName(e.target.value);
    
    if (e.target.value.length < 3 ) {
      setNameError('Некорректный ввод');
    } else {
      setNameError('');
    }
  };
  const handleSecondName = (e) => {
    setSecondName(e.target.value);
  
    if (e.target.value.length < 3 ) {
      setSecondNameError('Некорректный ввод');
    } else {
      setSecondNameError('');
    }
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    const re = /[0-9]/;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setPhoneError('Некорректный ввод');
    } else {
      setPhoneError('');
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Некорректный ввод')
    } else {
      setEmailError('')
    }
  };
  
  const handleAddress = (e) => {
    setAddress(e.target.value);
  
    if (e.target.value.length < 3 ) {
      setAddressError('Некорректный ввод');
    } else {
      setAddressError('');
    }
  };
  const changeValue = (e) => {
    setPay(e.target.value);
  }
  const handleComment = (e) => {
    setComment(e.target.value);
  
    if (e.target.value.length > 142 ) {
      setCommentError('Некорректный ввод');
    } else {
      setCommentError('');
    }
  };
  
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true)
        break
      case 'secondName':
        setSecondNameDirty(true)
        break
      case 'email':
        setEmailDirty(true)
        break
      case 'phone':
        setPhoneDirty(true)
        break
      case 'address':
        setAddressDirty(true)
        break
    }
  }
  
  return (
    <>
      <h2 className="page-subtitle">Контактные данные</h2>
      <div className="form__contacts">
        <div className={(nameError && nameDirty) && "form__contacts__container form__contacts__container--error"
          || "form__contacts__container"
        }>
          <input className="form__contacts__container--input"
                 value={name}
                 onChange={handleName}
                 onBlur={e => blurHandler(e)}
                 name="name"
                 type="text"
                 placeholder=" "/>
          <label
            className="form__contacts__container--placeholder"
            htmlFor="name">
            Имя
          </label>
          {(nameError && nameDirty) && <div className="error">{nameError}</div>}
        </div>
        <div className={(setNameError && secondNameDirty) && "form__contacts__container form__contacts__container--error"
          || "form__contacts__container"
        }>
          <input className="form__contacts__container--input"
                 value={secondName}
                 onChange={handleSecondName}
                 onBlur={e => blurHandler(e)}
                 name="secondName"
                 type="text"
                 placeholder=" "/>
          <label
            className="form__contacts__container--placeholder"
            htmlFor="secondName">
            Фамилия
          </label>
          {(secondNameError && secondNameDirty) && <div className="error">{secondNameError}</div>}
        </div>
        <div className={(phoneError && phoneDirty) && "form__contacts__container form__contacts__container--error"
          || "form__contacts__container"
        }>
          <input className="form__contacts__container--input"
                 value={phone}
                 onChange={handlePhone}
                 onBlur={e => blurHandler(e)}
                 name="phone"
                 type="text"
                 placeholder=" "/>
          <label
            className="form__contacts__container--placeholder"
            htmlFor="phone">
            Телефон
          </label>
          {(phoneError && phoneDirty) && <div className="error">{phoneError}</div>}
        </div>
        <div className={(emailError && emailDirty) && "form__contacts__container form__contacts__container--error"
          || "form__contacts__container"
        }>
          <input className="form__contacts__container--input"
                 value={email}
                 onChange={handleEmail}
                 onBlur={e => blurHandler(e)}
                 name="email"
                 type="text"
                 placeholder=" "/>
          <label
            className="form__contacts__container--placeholder"
            htmlFor="email">
            Email
          </label>
          {(emailError && emailDirty) && <div className="error">{emailError}</div>}
        </div>
        <div className={(addressError && addressDirty) && "form__contacts__container form__contacts__container--error form__contacts__container--address"
          || "form__contacts__container form__contacts__container--address"
        }>
          <input className="form__contacts__container--input"
                 value={address}
                 onChange={handleAddress}
                 onBlur={e => blurHandler(e)}
                 name="address"
                 type="text"
                 placeholder=" "/>
          <label
            className="form__contacts__container--placeholder"
            htmlFor="address">
            Адрес доставки
          </label>
          {(addressError && addressDirty) && <div className="error">{addressError}</div>}
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
        {(commentError) && <div className="form__contacts__container--error">{addressError}</div>}
      </div>
      <p className="form__contacts__container--comment--symbol">Использовано 0/142 символов</p>
    </>
  );
};