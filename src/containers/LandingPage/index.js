import React, { Component } from 'react';
import CountUp from 'react-countup';

import { LandingPageContainer } from './style';

class LandingPage extends Component {
  render() {
    return (
      <LandingPageContainer>
        <div className="landing-page-container">
          <h1 className="promotion-text" align="center">Assisting Companies Since 2016</h1>
          <div className="current-client-text d-flex justify-content-between flex-wrap">
            <div className="client-group">
              <CountUp start={0} end={4000} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <p ref={countUpRef} className="total-client"></p>
                  </div>
                )}
              </CountUp>
              <p className="client-name">Applicants Applied</p>
            </div>
            <div className="client-group">
              <CountUp start={0} end={2000} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <p ref={countUpRef} className="total-client"></p>
                  </div>
                )}
              </CountUp>
              <p className="client-name">Candidates Hired</p>
            </div>
            <div className="client-group">
              <CountUp start={0} end={5000} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <p ref={countUpRef} className="total-client"></p>
                  </div>
                )}
              </CountUp>
              <p className="client-name">Company Subscriptions</p>
            </div>
          </div>
        </div>
      </LandingPageContainer>
    );
  }
}

export default LandingPage;
