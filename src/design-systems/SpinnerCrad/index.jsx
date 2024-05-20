import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerCard = ({ className }) => {
  const spinnerCardClassNames = [
    'd-flex align-items-center justify-content-center',
    'border border-secondary bg-secondary',
    'mb-1 h-100 w-100 position-absolute',
    className,
  ].join(' ');

  return (
    <div className={spinnerCardClassNames}>
      <Spinner
        animation="border"
        role="status"
        className="text-light"
        style={{ width: '3rem', height: '3rem' }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default SpinnerCard;
