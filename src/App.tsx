import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import AppRouter from './routes';

export const App: FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Sidebar />
      <AppRouter />
    </BrowserRouter>
  );
};
