import React from 'react';
import tokens from '../../styles/tokens.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { HeaderContainer } from './Header.style';

const globalTokens = tokens.global;

export const Header = () => {
    const browserWidth = useSelector((state:RootState)=>state.uiSetting.browserWidth);

    return (
        <HeaderContainer>
        { browserWidth > Number(globalTokens['--mobileMaxWidth'].value) 
            ? <HeaderDesktop/> 
            : <HeaderMobile/> }
        </HeaderContainer>
    );
};