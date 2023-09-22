import { styled } from 'styled-components';
import tokens from '../../styles/tokens.json';

const globalToken = tokens.global;

export const Heading1Typo = styled.span<{ browserWidth : number}>`
    color: ${globalToken['--dark'].value};
    font-size: ${(props)=>( props.browserWidth > Number(globalToken['--mobileMaxWidth'].value) )
        ? globalToken['--heading1'].value
        : globalToken['--heading1-mobile'].value}rem;
    font-weight: ${globalToken['--boldWeight'].value};
`

export const Heading2Typo = styled.span<{ browserWidth : number }>`
    color: ${globalToken['--dark'].value};
    font-size: ${(props)=>( props.browserWidth > Number(globalToken['--mobileMaxWidth'].value) )
        ? globalToken['--heading2'].value
        : globalToken['--heading2-mobile'].value}rem;
    font-weight: ${globalToken['--boldWeight'].value};
`

export const SmallTitleTypo = styled.span<{ browserWidth : number}>`
    color: ${globalToken['--dark'].value};
    font-size: ${(props)=>( props.browserWidth > Number(globalToken['--mobileMaxWidth'].value) )
        ? globalToken['--bodyText'].value
        : globalToken['--bodyText-mobile'].value}rem;
    font-weight: ${globalToken['--boldWeight'].value};
`

export const BodyTextTypo = styled.span<{ browserWidth : number}>`
    color: ${globalToken['--dark'].value};
    font-size: ${(props)=>( props.browserWidth > Number(globalToken['--mobileMaxWidth'].value) )
        ? globalToken['--bodyText'].value
        : globalToken['--bodyText-mobile'].value}rem;
    font-weight: ${globalToken['--regularWeight'].value};
`

export const SmallTextTypo = styled.span<{ browserWidth : number }>`
    color: ${globalToken['--dark'].value};
    font-size: ${(props)=>( props.browserWidth > Number(globalToken['--mobileMaxWidth'].value) )
        ? globalToken['--smallText'].value
        : globalToken['--smallText-mobile'].value}rem;
    font-weight: ${globalToken['--regularWeight'].value};
`