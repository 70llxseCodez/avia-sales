import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './filter.scss';
import checkIcon from './../../assets/check.svg';
import { setAll } from './filter-slice';
import Checkboxes from './Checkboxes';

const Filter = () => {
  const { filter } = useSelector((state) => state);
  const { filterNames, all } = filter;
  const dispatch = useDispatch();
  return (
    <div>
      <section className="filter">
        <h3 className="filter__title">Количество пересадок</h3>
        <div className="filter__items">
          <label htmlFor="Все" className="filter__item-checkbox">
            {all ? <img className="filter__check-icon" src={checkIcon} alt="check-icon" /> : null}
            <input id="Все" type="checkbox" checked={all} onChange={() => dispatch(setAll())} />
            <label htmlFor="Все">
              <span>Все</span>
            </label>
          </label>
          <Checkboxes filterNames={filterNames} />
        </div>
      </section>
    </div>
  );
};

export default Filter;
