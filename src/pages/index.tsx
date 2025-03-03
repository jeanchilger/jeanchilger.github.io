import { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const CenteredContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-shadow: 1px 0 10px #959fd34a;
`;

const GoDownButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 3rem !important;
  padding: 1rem;

  background-color: transparent;
  border: none;
  color: white;
  text-decoration: none;

  animation: pulseDown 1s infinite;

  @keyframes pulseDown {
    0% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    50% {
      opacity: 0.5;
      transform: translate(-50%, 10px);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, 20px);
    }
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <IndexPageContainer className='row'>
      <CenteredContentContainer className='col-12 col-md-6'>
        <HeroTitle>Jean Carlo Hilger</HeroTitle>
      </CenteredContentContainer>
      
      <CenteredContentContainer className='col-md-6 d-none d-md-flex'>
        <h1>THIS IS THE ANIMATION</h1>
      </CenteredContentContainer>

      <GoDownButton>
        <i className='bi bi-chevron-down'></i>
      </GoDownButton>
    </IndexPageContainer>
  );
};

export const Head: HeadFC = () => <title>Jean Carlo Hilger</title>

export default IndexPage;