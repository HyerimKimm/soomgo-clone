import React from 'react';
import { styled } from 'styled-components';
import { SmallTitleTypo } from '../typographys/Typographys';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const TextButtonContainer = styled.button`
    
`

type TextButtonProps = {
    title: string;
}

const TextButton = ({title} : TextButtonProps) => {
    const browserWidth = useSelector((state:RootState)=>state.uiSetting.browserWidth);

    return (
        <TextButtonContainer>
            <SmallTitleTypo browserWidth={browserWidth}>{title}</SmallTitleTypo>
        </TextButtonContainer>
    );
};

export default TextButton;