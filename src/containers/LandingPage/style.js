import styled from 'styled-components';
import img from 'assets/bg.jpg'

export const LandingPageContainer = styled.div`
    font-family: 'Fira Sans', sans-serif;
    position: relative;
    color: #122541;
    background: url(${img}) no-repeat no-repeat center fixed;
    background-size: cover;
    min-height: 100vh;

    .landing-page-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: calc(100vh - 66px);
      flex-direction: column;
    }

    .promotion-text {
      font-size: 3.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    .client-group {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 240px;
    }

    .current-client-text {
      padding-bottom: 6rem;
    }

    .client-group p {
      text-align: center;
    }

    .client-group .total-client {
      font-weight: 600;
      font-size: 3rem;
      color: #33BEEF;
    }

    .total-client:after {
      content: '+';
      color: #122541;
      font-size: 3.5rem;
    }

    .client-group .client-name {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 767px) {
      .promotion-text {
        padding-top: 6rem;
      }

      .current-client-text {
        justify-content: center!important;
      }

    }

`;