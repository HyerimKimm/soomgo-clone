import React from 'react';
import { HeaderDesktopContainer } from './Header.style';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

const HeaderDesktop = () => {
    return (
        <HeaderDesktopContainer>
            <HeaderLogo/>
            <HeaderNav/>
        </HeaderDesktopContainer>
    );
};

export default HeaderDesktop;