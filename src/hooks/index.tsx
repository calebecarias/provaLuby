import React from 'react';

import { DataProvider } from './DataContext';
import { TabProvider } from './TabContext';

const AppProvider: React.FC = ({ children }) => (
  <DataProvider>
    <TabProvider>{children}</TabProvider>
  </DataProvider>
);

export default AppProvider;
