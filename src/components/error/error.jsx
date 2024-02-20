import React from 'react';

const Error = ({info}) => {
  return <div className="error">ERROR {info.message}</div>;
};

export default Error;
