const sortHotels = (type, list) => {
  switch (type) {
    case `low`:
      return list.sort((a, b) => a.price - b.price);
    case `high`:
      return list.sort((a, b) => b.price - a.price);
  }
};

export { sortHotels };
