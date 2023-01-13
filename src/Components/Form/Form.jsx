import './Form.scss';

export const Form = () => {
  return (
    <>
      <h2 className="page-subtitle">Контактные данные</h2>
      <div className="form__contacts">
        <div className="form__contacts__container">
          <input className="form__contacts__container--input"
                 name="name"
                 type="text"
                 placeholder=" " />
          <label
            className="form__contacts__container--placeholder"
            htmlFor="name">
            Имя
          </label>
        </div>
        <div className="form__contacts__container">
          <input className="form__contacts__container--input"
                 name="secondName"
                 type="text"
                 placeholder=" " />
          <label
            className="form__contacts__container--placeholder"
            htmlFor="secondName">
            Фамилия
          </label>
        </div>
        <div className="form__contacts__container">
          <input className="form__contacts__container--input"
                 name="phone"
                 type="text"
                 placeholder=" " />
          <label
            className="form__contacts__container--placeholder"
            htmlFor="phone">
            Телефон
          </label>
        </div>
        <div className="form__contacts__container">
          <input className="form__contacts__container--input"
                 name="email"
                 type="text"
                 placeholder=" " />
          <label
            className="form__contacts__container--placeholder"
            htmlFor="email">
            Email
          </label>
        </div>
        <div className="form__contacts__container form__contacts__container--address">
          <input className="form__contacts__container--input"
                 name="address"
                 type="text"
                 placeholder=" " />
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
               name="pay"
        />
        <label htmlFor="cash">Наличными курьеру</label>
      </div>
      <div className="form__contacts__radio">
        <input type="radio"
               id="card"
               name="pay"
        />
        <label htmlFor="card">Картой курьеру</label>
      </div>
      <div className="form__contacts__radio">
        <input type="radio"
               id="online"
               name="pay"
        />
        <label htmlFor="online">Картой онлайн</label>
      </div>
      <h3 className="page-subtitle">Комментарий к заказу</h3>
      <div className="form__contacts__container form__contacts__container--comment">
        <input className="form__contacts__container--input"
               name="name"
               type="text"
               placeholder=" " />
        <label
          className="form__contacts__container--placeholder"
          htmlFor="name">
          Комментарий к заказу
        </label>
      </div>
      <p className="form__contacts__container--comment--symbol">Использовано 0/142 символов</p>
    </>
  );
};