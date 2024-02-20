export const sortHotels = (hotels = [{price: 1}, {price: 2}], sortType) => {
  switch (sortType) {
    case 'low':
      return [...hotels].sort((a, b) => a.price - b.price);
    case 'up':
      return [...hotels].sort((a, b) => b.price - a.price);
    case 'top':
      return [...hotels].sort((a, b) => b.rating - a.rating);
    default:
      return hotels;
  }
};
