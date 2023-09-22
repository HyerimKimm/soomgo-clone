import { Meta, Story } from "@storybook/react";
import { BodyTextTypo, Heading1Typo, Heading2Typo, SmallTextTypo, SmallTitleTypo } from "./Typographys";

type TypographysProps = {
    isMobile: boolean,
}

const Typographys = ({ isMobile } : TypographysProps) => {
    return (
        <div style={{ display:'flex', flexDirection:'column' }}>
            <Heading1Typo 
                browserWidth={ isMobile? 500 : 1000 }>
                    This is Heading1 Typo.
            </Heading1Typo>
            <Heading2Typo 
                browserWidth={ isMobile? 500 : 1000 }>
                    This is Heading2 Typo.
            </Heading2Typo>
            <SmallTitleTypo 
                browserWidth={ isMobile? 500 : 1000 }>
                    This is Small Title Typo.
            </SmallTitleTypo>
            <BodyTextTypo 
                browserWidth={ isMobile? 500 : 1000 }>
                    This is Body Text Typo.
            </BodyTextTypo>
            <SmallTextTypo 
                browserWidth={ isMobile? 500 : 1000 }>
                    This is Small Text Typo.
            </SmallTextTypo>
        </div>
    )
}

export default {
    title: 'atoms/Typography',
    component: Typographys,
} as Meta

const Template: Story<TypographysProps> = (args) => <Typographys {...args}/>

export const TypographysTemplate = Template.bind({});
TypographysTemplate.args = { isMobile : false };