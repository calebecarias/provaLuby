import React, { useState, useEffect } from 'react';

import { StyledSpinner } from './styles';

const LoadingBox: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <StyledSpinner viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
          />
        </StyledSpinner>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default LoadingBox;
