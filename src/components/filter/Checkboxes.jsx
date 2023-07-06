import React from 'react';
import { useDispatch } from 'react-redux';

import checkIcon from './../../assets/check.svg';
import { checkItem } from './filter-slice';

const Checkboxes = ({ filterNames }) => {
  const dispatch = useDispatch();

  //'Без пересадок': true,
  // '1 пересадка': true,
  // '2 пересадки': true,
  // '3 пересадки': true,

  return (
    <>
      <label htmlFor={'Без пересадок'} className="filter__item-checkbox">
        {filterNames['Без пересадок'] ? <img className="filter__check-icon" src={checkIcon} alt="check-icon" /> : null}
        <input
          id={'Без пересадок'}
          type="checkbox"
          checked={filterNames['Без пересадок']}
          onChange={() => dispatch(checkItem('Без пересадок'))}
        />
        <label htmlFor={'Без пересадок'}>
          <span>Без пересадок</span>
        </label>
      </label>
      <label htmlFor={'1 пересадка'} className="filter__item-checkbox">
        {filterNames['1 пересадка'] ? <img className="filter__check-icon" src={checkIcon} alt="check-icon" /> : null}
        <input
          id={'1 пересадка'}
          type="checkbox"
          checked={filterNames['1 пересадка']}
          onChange={() => dispatch(checkItem('1 пересадка'))}
        />
        <label htmlFor={'1 пересадка'}>
          <span>1 пересадка</span>
        </label>
      </label>
      <label htmlFor={'2 пересадки'} className="filter__item-checkbox">
        {filterNames['2 пересадки'] ? <img className="filter__check-icon" src={checkIcon} alt="check-icon" /> : null}
        <input
          id={'2 пересадки'}
          type="checkbox"
          checked={filterNames['2 пересадки']}
          onChange={() => dispatch(checkItem('2 пересадки'))}
        />
        <label htmlFor={'2 пересадки'}>
          <span>2 пересадки</span>
        </label>
      </label>
      <label htmlFor={'3 пересадки'} className="filter__item-checkbox">
        {filterNames['3 пересадки'] ? <img className="filter__check-icon" src={checkIcon} alt="check-icon" /> : null}
        <input
          id={'3 пересадки'}
          type="checkbox"
          checked={filterNames['3 пересадки']}
          onChange={() => dispatch(checkItem('3 пересадки'))}
        />
        <label htmlFor={'3 пересадки'}>
          <span>3 пересадки</span>
        </label>
      </label>
    </>
  );
};

export default Checkboxes;
