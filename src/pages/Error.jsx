import React from 'react';

const Error = () => {
  return (
    <section
      className="favorites favorites--empty"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 className="visually-hidden">404 error</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">404 error</b>
        <p className="favorites__status-description">
          Save properties to narrow down search or plan yor future trips.
        </p>
      </div>
    </section>
  );
};

export default Error;
