import React from 'react';
import './App.css';
import styled from 'styled-components';
import { GlobalProvider } from './context/GlobalState';
import Routes from './components/Routes';

const AppLayout = styled.div`
  /* display: grid;
  grid-template-rows: 1fr 12fr 1fr; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: black;
`

function App() {
  return (
    <GlobalProvider>
      <AppLayout>
        <Routes />
      </AppLayout>
    </GlobalProvider>
  );
}

export default App;
