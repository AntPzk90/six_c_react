export const structureFavoriteHotels = (hotels) => {
  let keys = new Set();
  hotels.forEach((item) => keys.add(item.city.name.toLowerCase()));
  const obj = Array.from(keys).reduce((accumulator, value) => {
    return {...accumulator, [value]: []};
  }, {});
  hotels.map((hotel) => {
    obj[hotel.city.name.toLowerCase()].push(hotel);
  });
  return obj;
};
