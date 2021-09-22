import React, { useCallback, useContext, createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface TabContextData {
  path: string;
  activateTab(): void;
}

const TabContext = createContext<TabContextData>({} as TabContextData);

const TabProvider: React.FC = ({ children }) => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  const activateTab = useCallback(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <TabContext.Provider value={{ path, activateTab }}>
      {children}
    </TabContext.Provider>
  );
};

function useTab(): TabContextData {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
}

export { TabProvider, useTab };
