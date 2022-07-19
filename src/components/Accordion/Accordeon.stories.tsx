import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;
const callback = action("accordion mod changed event fired")
const onClickCallback = action("some item was clicked")
const Template: ComponentStory<typeof Accordion> = (args: AccordionPropsType) => <Accordion {...args} />;

const callbackProps = {
    onClick: onClickCallback,
    onChange: callback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    titleValue: "Menu",
    collapsed: true,
    items: [],
}
export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    ...callbackProps,
    titleValue: "Users",
    collapsed: false,
    items: [{title: "Dimych", value: 1}, {title: "Valery", value: 2}, {title: "Artem", value: 3}],
}

// export const MenuCollapsedMode = ()=><Accordion titleValue={"Menu"} onChange={callback} collapsed={true} items={[]}
// onClick ={onClickCallback}/>

// export const UsersUncollapsedMode=()=><Accordion titleValue={"Menu"} onChange={callback} collapsed={true} items={[{title:"Dimych", value: 1},{title:"Valery", value: 2},{title:"Artem", value: 3}]}
//                                               onClick ={onClickCallback}/>

export const MadeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}
                      items={[
                          {title: "Dimych", value: 1},
                          {title: "Valery", value: 2},
                          {title: "Artem", value: 3}
                      ]}
                      onClick={(value) => {
                          alert(`user with ID ${value} should be happy`)
                      }}
    />
}



