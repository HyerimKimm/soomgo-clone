import React from 'react';
import { styled } from 'styled-components';
import TextButton from '../../atoms/buttons/TextButton';
import tokens from '../../styles/tokens.json';

const globalTokens = tokens.global;

export const HeaderNavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${globalTokens['--padding-1'].value}rem;
    margin-left: ${globalTokens['--padding2'].value}rem;
`

const HeaderNav = () => {
    return (
        <HeaderNavContainer>
            <TextButton title='견적요청'/>
            <TextButton title='고수찾기'/>
            <TextButton title='마켓'/>
            <TextButton title='커뮤니티'/>
        </HeaderNavContainer>
    );
};

export default HeaderNav;