import React from 'react';
import {ThreeCircles} from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f5f5',
      }}
    >
      <ThreeCircles
        height="100"
        width="100"
        color="#4481c3"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loader;
