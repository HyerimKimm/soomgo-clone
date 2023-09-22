import { styled } from 'styled-components';
import tokens from '../../styles/tokens.json';

const globalTokens = tokens.global;

export const HeaderContainer = styled.header`
    width: 100%;
    height: 58px;
    padding: ${globalTokens['--padding-1'].value}rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${globalTokens['--secondary'].value};
`
export const HeaderDesktopContainer = styled.section`
    width: 100%;
    max-width: 970px;
    height: 58px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const HeaderMobileContainer = styled.section`
    width: 100%;
    height: 58px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const HeaderMobileLeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${globalTokens['--padding-1'].value}rem;
`
export const HeaderMobileRightContainer= styled.div`
`