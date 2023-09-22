import { Meta, Story } from "@storybook/react";
import IconButton, { IconButtonProps } from "./IconButton";

export default {
    title: 'atoms/Buttons',
    component: IconButton,
    argTypes: {
        name: {
            control: { type: 'select'},
            options: [ 'search', 'sideBar' ]
        }
    }
} as Meta

const Template: Story<IconButtonProps> = (args) => <IconButton {...args}/>
export const IconButtonTemplate = Template.bind({});
IconButtonTemplate.args = {
    name: 'sideBar',
    onClick: ()=>{},
}