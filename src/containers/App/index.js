import React, { Component } from 'react';

import { AppContainer } from './style';
import LandingPage from 'containers/LandingPage';
import Header from 'components/Header';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <LandingPage />
      </AppContainer>
    );
  }
}

export default App;
