import React, { Component } from 'react';

import { LandingPageContainer } from './style';

class LandingPage extends Component {
  render() {
    return (
      <LandingPageContainer>
        <div className="landing-page-container">
          <h1 className="promotion-text" align="center">Assisting Companies Since 2016</h1>
          <div className="current-client-text d-flex justify-content-between flex-wrap">
            <div className="client-group">
              <p className="total-client">4,000 <span>+</span></p>
              <p className="client-name">Applicants Applied</p>
            </div>
            <div className="client-group">
              <p className="total-client">2,000 <span>+</span></p>
              <p className="client-name">Candidates Hired</p>
            </div>
            <div className="client-group">
              <p className="total-client">5,000 <span>+</span></p>
              <p className="client-name">Company Subscriptions</p>
            </div>
          </div>
        </div>
      </LandingPageContainer>
    );
  }
}

export default LandingPage;
