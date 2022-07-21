// import React from "react";
// export type AccordionPropsType = {
//     titleValue: string
//     onChange:()=> void
//     collapsed: boolean
//     /**
//      * elements that are howed when accordion is uncollapsed
//      */
//     items?:ItemType[]
//     onClick?:(value:any)=>void
// }
// type ItemType = {
//     title: string
//     value: any
// }
// export function Accordion (props:AccordionPropsType) {
//     console.log('Accordion rendering')
//     return (
//         <div>
//             <AccordionTitle title={props.titleValue}
//                             onChange={props.onChange}/>
//             {!props.collapsed && <AccordionBody/>}
//         </div>
//     )
// }
// type AccordionTitlePropsType = {
//     title: string
//     onChange:()=>void
// }
//
// function AccordionTitle (props:AccordionTitlePropsType) {
//     console.log('AccordionTitle  rendering')
//     return (
//         <h3 onClick={props.onChange}>{props.title}</h3>
//     )
// }
// function AccordionBody () {
//     console.log('AccordionBody  rendering')
//     return (
//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>
//     )
// }

import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
    items?: ItemType[]
    onClick:(value: any) =>void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {/*{!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}*/}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle  rendering')
    return (
        <h3 onClick={props.onChange}>--{props.title}</h3>
    )
}

export type AccordionBodyPropsTitle = {
    items: ItemType[]
    onClick:(value: any) =>void

}

function AccordionBody(props: AccordionBodyPropsTitle) {
    console.log('AccordionBody  rendering')
    return (
        <ul>
            {props.items.map((i, index)=> <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}