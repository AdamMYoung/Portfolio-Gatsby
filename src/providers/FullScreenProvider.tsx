import React, { useContext, useState } from 'react';

const FullScreenContext = React.createContext({
  isFullScreen: false,
  setFullScreen: (_: boolean) => {},
});

export const FullScreenProvider: React.FC = (props) => {
  const [isFullScreen, setFullScreen] = useState(false);

  return (
    <FullScreenContext.Provider value={{ isFullScreen, setFullScreen }}>{props.children}</FullScreenContext.Provider>
  );
};

export const useFullScreenStatus = () => {
  return useContext(FullScreenContext);
};
