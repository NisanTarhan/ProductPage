import React from 'react';
import './App.css';
import styled from 'styled-components';
import Home from './pages/Home';
import Detail from './pages/Detail';

const AppLayout = styled.div`
  /* display: grid;
  grid-template-rows: 1fr 12fr 1fr;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh; */
  background: black;
`

function App() {
  return (
    <AppLayout>
      {/* <Home /> */}
      <Detail />
    </AppLayout>
  );
}

export default App;
