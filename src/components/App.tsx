import React from 'react';
import '../styles/index.scss';
import styled from 'styled-components';
import image from '@/assets/img.jpg';
import {Counter} from './Counter';

const Main = styled.div`
  color: chartreuse;
  font-size: 60px;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  min-height: 100vh;
`;

export const App = () => {
    return <Main>
        <Counter/>
    </Main>;
};
