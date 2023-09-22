import React from 'react';
import { styled } from 'styled-components';

export const HeaderLogoButton = styled.button`
    
`
export const HeaderLogoImg = styled.img`
    height: 1.625rem;
`

const HeaderLogo = () => {
    return (
        <HeaderLogoButton>
            <HeaderLogoImg src="https://assets.cdn.soomgo.com/icons/logo/navigation_logo.svg"/>
        </HeaderLogoButton>
    );
};

export default HeaderLogo;