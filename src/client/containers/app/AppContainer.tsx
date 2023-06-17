import React from 'react';
import { hot } from 'react-hot-loader';

import MainRouter from '../../routers/routes';

const AppContainer = () => {
  return <MainRouter />;
};

export default hot(AppContainer) as any;