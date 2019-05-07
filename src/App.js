import React, { Fragment } from 'react';
import GlobalStyle from './sytles/global';

import Main from './pages/Main';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>
);

export default App;
