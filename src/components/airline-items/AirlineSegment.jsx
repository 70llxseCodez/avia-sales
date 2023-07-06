import React, { memo } from 'react';
import { add } from 'date-fns';
import PropTypes from 'prop-types';

const AirlineSegment = memo(function AirlineSegmentComp({ origin, destination, duration, stops, date }) {
  const currentHour = new Date(date).getHours();
  const currentMinutes =
    new Date(date).getMinutes() < 10 ? '0' + new Date(date).getMinutes() : new Date(date).getMinutes();
  const hour = add(new Date(date), { minutes: duration }).getHours();
  const minutes =
    add(new Date(date), { minutes: duration }).getMinutes() < 10
      ? '0' + add(new Date(date), { minutes: duration }).getMinutes()
      : add(new Date(date), { minutes: duration }).getMinutes();

  return (
    <div className="airlines__item-options">
      <div className="airlines__item-wrapper">
        <p className="airlines__item-title">
          {origin} – {destination}
        </p>
        <p className="airlines__item-desc">
          {currentHour}:{currentMinutes} – {hour}:{minutes}
        </p>
      </div>
      <div className="airlines__item-wrapper">
        <p className="airlines__item-title">В пути</p>
        <p className="airlines__item-desc">
          {duration % 24}ч {duration % 60}м
        </p>
      </div>
      <div className="airlines__item-wrapper">
        <p className="airlines__item-title">{stops.length} пересадки</p>
        <p className="airlines__item-desc">{stops.join(',')}</p>
      </div>
    </div>
  );
});

PropTypes.AirlineSegment = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  duration: PropTypes.number,
  stops: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
};
export default AirlineSegment;
