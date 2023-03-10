import { useState } from 'react';
import { SvgSprite } from '../SvgSprite';

import './Product.scss';

export const Product = ({product, handleClickId, addFormProductsResultHandler}) => {
  const [count, setCount] = useState(1);
  const [colorItem, setColorItem] = useState('#444444');
  const [sizeItem, setSizeItem] = useState('XS');
  const [deleteCheck, setDeleteCheck] = useState(false);
  const [hide, setHide] = useState(false);
  
  const {
    id,
    amount,
    title,
    img,
    vendor_code,
    price,
    price_old,
    season,
    sizes,
    colors,
    deleted
  } = product;
  
  addFormProductsResultHandler(
    {
      deleted: deleted,
      id: id,
      title: title,
      vendor_code: vendor_code,
      price: price,
      amount: count,
      season: season,
      size: sizeItem,
      color: colorItem
    }
  );
  
  const changeValueSize = (e) => {
    setSizeItem(e.target.value);
  }
  
  const changeValueColor = (e) => {
    setColorItem(e.target.value);
  }
  
  const incrementCount = (event) => {
    event.preventDefault();
    if (count < amount) {
      setCount((prevCount) => {
        product.quantity_ordered = prevCount + 1;
        handleClickId(prevCount + 1);
        return prevCount + 1;
      });
    }
  };
  
  const decrementCount = (event) => {
    event.preventDefault();
    if (count > 1) {
      setCount((prevCount) => {
        product.quantity_ordered = prevCount - 1;
        handleClickId(id);
        return prevCount - 1;
      });
    }
  };
  
  const deleteProduct = (event) => {
    event.preventDefault();
    setDeleteCheck(!deleteCheck);
    handleClickId(id);
    product.deleted = true;
  };
  
  const reestablishProduct = (event) => {
    event.preventDefault();
    product.deleted = false;
    handleClickId(id);
    setDeleteCheck(!deleteCheck);
  };
  
  const hideBlock = (event) => {
    event.preventDefault();
    setHide(!hide);
  };
  
  return (
    <>
      {
        (product.deleted !== true)
          ? <div className="form__products__item" id={id}>
            <img src={img} alt={title} className="form__products__item--img"/>
            <div className="form__products__item--desc">
              <h3 className="form__products__item--title">{title}</h3>
              <p className="form__products__item--article">
                <span>??????????????</span>
                <span>{vendor_code}</span>
              </p>
              <p className="form__products__item--season">
                <span>??????????</span>
                <span>{season}</span>
              </p>
              <div className="form__products__item--sizes">
                {sizes.map(size => (
                  <div key={size.size_id} className="form__products__item--sizes--item">
                    <input type="radio"
                           id={`size-${id}-${size.size_title}`}
                           name={`size-${id}`}
                           disabled={size.size_presence !== true}
                           value={size.size_title}
                           checked={sizeItem === `${size.size_title}`}
                           onChange={changeValueSize}
                    />
                    <label htmlFor={`size-${id}-${size.size_title}`}>{size.size_title}</label>
                  </div>
                ))}
              </div>
              <div className="form__products__item--colors">
                {colors.map(color => (
                  <div key={color.color_id} className="form__products__item--colors--item">
                    <input type="radio"
                           id={color.color}
                           name={`color-${id}`}
                           value={color.color}
                           checked={colorItem === `${color.color}`}
                           onChange={changeValueColor}
                    />
                    <label htmlFor={color.color}
                           style={{backgroundColor: `${color.color}`}}></label>
                  </div>
                ))}
              </div>
            </div>
            <div className="form__products__item__calc">
              <div className="form__products__item__calc--price">
                <div className="form__products__item__calc--price--old">
                  {(price_old !== null) ? price_old.toLocaleString() + " ???" : ""}
                </div>
                <div className="form__products__item__calc--price--new">
                  {price.toLocaleString()} ???
                </div>
              </div>
              <div className="form__products__item__calc--count">
                <button onClick={decrementCount} disabled={(count === 1)}
                        className="form__products__item__calc--count--btn">
                  <SvgSprite id={"minus"}/>
                </button>
                <div className="form__products__item__calc--count--num">{count}</div>
                <button onClick={incrementCount} disabled={count === amount}
                        className="form__products__item__calc--count--btn">
                  <SvgSprite id={"plus"}/>
                </button>
              </div>
              <div className="form__products__item__calc--sum">
                <div className="form__products__item__calc--price--old">
                  {(price_old !== null) ? (price_old * count).toLocaleString() + " ???" : ""}
                </div>
                <div className="form__products__item__calc--price--new">
                  {(price * count).toLocaleString()} ???
                </div>
              </div>
            </div>
            <button onClick={deleteProduct} className="form__products__item--delete">
              <SvgSprite id={"close"}/>
            </button>
          </div>
          : <div className={hide ? "block-return block-return--hide" : "block-return"}>
            <p>??????????
              <span className="block-return__title"> {title} </span>
              ?????? ???????????? ???? ??????????????.</p>
            <button onClick={reestablishProduct} className="block-return__btn"> ????????????????????????</button>
            <button onClick={hideBlock} className="block-return__btn--delete">
              <SvgSprite id={"close"}/>
            </button>
          </div>
      }
    </>
  );
};