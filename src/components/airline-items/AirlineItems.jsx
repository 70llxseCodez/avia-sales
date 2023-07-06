import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Spin } from 'antd';

import { getAirlines } from '../airline/airline-slice';
import { selectTickets } from '../airline/airline-selector';

import './AirlineItems.scss';
import AirlineSegment from './AirlineSegment';

const AirlineItems = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(5);
  const { filter, category } = useSelector((state) => state);
  const { airlines, error, loader } = useSelector((state) => selectTickets(state, category, filter));
  useEffect(() => {
    dispatch(getAirlines());
  }, [dispatch]);
  if (loader) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return <Alert style={{ marginTop: '20px' }} message="Error" type="error" showIcon description={error} />;
  }
  if (!airlines.length) {
    return (
      <Alert
        style={{ marginTop: '20px' }}
        message="Warning"
        type="warning"
        showIcon
        description="Not found what you're finding"
      />
    );
  }
  return (
    <>
      {airlines.slice(0, amount).map((item, index) => {
        return (
          <section key={index} className="airlines__item">
            <div className="airlines__item-header">
              <h2>{item.price} Р</h2>
              <img src={`https://pics.avs.io/99/36/{${item.carrier}}.png`} alt="logo" />
            </div>
            {item.segments.map((item, index) => {
              return <AirlineSegment key={index} {...item} />;
            })}
          </section>
        );
      })}
      <button className="airlines__button" onClick={() => setAmount((count) => count + 5)}>
        Показать еще 5 билетов!
      </button>
    </>
  );
};

export default AirlineItems;
