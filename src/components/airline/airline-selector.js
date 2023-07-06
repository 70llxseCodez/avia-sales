export const selectTickets = (state, category, filter) => {
  const sortedTickets = () => {
    if (category === 'Самый дешевый') {
      return state.airlines.airlines.slice().sort((a, b) => a.price - b.price);
    } else if (category === 'Самый быстрый') {
      return state.airlines.airlines
        .slice()
        .sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - b.segments[0].duration + b.segments[1].duration
        );
    }
  };
  const tickets = sortedTickets().filter((ticket) => {
    if (filter.all) {
      return true;
    }
    if (
      filter.filterNames['Без пересадок'] &&
      ticket.segments[0].stops.length === 0 &&
      ticket.segments[1].stops.length === 0
    ) {
      return true;
    }
    if (
      filter.filterNames['1 пересадка'] &&
      ticket.segments[0].stops.length === 1 &&
      ticket.segments[1].stops.length === 1
    ) {
      return true;
    }
    if (
      filter.filterNames['2 пересадки'] &&
      ticket.segments[0].stops.length === 2 &&
      ticket.segments[1].stops.length === 2
    ) {
      return true;
    }
    if (
      filter.filterNames['2 пересадки'] &&
      ticket.segments[0].stops.length === 2 &&
      ticket.segments[1].stops.length === 2
    ) {
      return true;
    }
    if (
      filter.filterNames['3 пересадки'] &&
      ticket.segments[0].stops.length === 3 &&
      ticket.segments[1].stops.length === 3
    ) {
      return true;
    } else {
      return false;
    }
  });

  return {
    ...state.airlines,
    airlines: tickets,
  };
};
