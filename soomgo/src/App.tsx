import React, { useMemo } from 'react';
import { Heading1Typo } from './atoms/typographys/Typographys';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { setBrowserWidth } from './redux/createSlice/uiSettingSlice';
import { styled } from 'styled-components';
import { Header } from './components/headers/Header';

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`

function App() {
  const dispatch = useDispatch();

  useMemo(()=>{
    window.addEventListener("resize",()=>{
      dispatch(setBrowserWidth(window.innerWidth));
    })
  },[]);

  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  );
}

export default App;
