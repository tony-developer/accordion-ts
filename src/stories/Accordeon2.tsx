import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "../components/Accordion/Accordion";


export default {
    title: 'Accordion',
    component: Accordion
}


const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} onChange={callback} collapsed={true} items={[]}
                                                  onClick={onClickCallback}/>
export const UserCollapsedMode = () => <Accordion titleValue={"Users"} onChange={callback} collapsed={true}
                                                  items={[{title: "Dimych", value: 1}, {
                                                      title: "Valera",
                                                      value: 2
                                                  }, {title: "Artem", value: 3}]} onClick={onClickCallback}/>

export const MadeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} onChange={() => setValue(!value)} collapsed={value}
                      items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}]}
                      onClick={onClickCallback}
    />
}
