import React from 'react';
import { HeaderMobileContainer, HeaderMobileLeftContainer, HeaderMobileRightContainer } from './Header.style';
import HeaderLogo from './HeaderLogo';
import IconButton from '../../atoms/buttons/IconButton';

const HeaderMobile = () => {
    return (
        <HeaderMobileContainer>
            <HeaderMobileLeftContainer>
                <IconButton name='sideBar' onClick={()=>{}}/>
                <HeaderLogo/>
            </HeaderMobileLeftContainer>
            <HeaderMobileRightContainer>
                <IconButton name='search' onClick={()=>{}}/>
            </HeaderMobileRightContainer>
        </HeaderMobileContainer>
    );
};

export default HeaderMobile;