import '../styles/index.scss';
import {Counter} from './Counter';
import styled from 'styled-components';
import image from '@/assets/img.jpg';

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
