import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Categories.scss';
import { setActive } from './categories-slice';

const Categories = () => {
  const { category } = useSelector((state) => state);
  const dispatch = useDispatch();
  const buttonName = ['Самый дешевый', 'Самый быстрый'];
  const classNameButton = 'categories__button';
  return (
    <header className="categories">
      {buttonName.map((item) => {
        return (
          <button
            key={item}
            onClick={() => dispatch(setActive(item))}
            className={category === item ? 'categories__button-active' : classNameButton}
          >
            {item}
          </button>
        );
      })}
    </header>
  );
};

export default Categories;
