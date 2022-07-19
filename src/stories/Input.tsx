import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions'
import {string} from "prop-types";

export default {
    title: 'input',
}
export const UncontrolledInput = () => <input/>
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        // debugger
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChange}/>-{value}</>
}

export const GetValueUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        // const el = document.getElementById('inputId') as HTMLInputElement
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>-actual value: {value}</>
}
export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
    return <input value={parentValue} onChange={onChange}/>
}
export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}
export const ControlledSelect = () => {
const [parentValue, setParentValue]=useState<string|undefined>(undefined)
    const onChange=(e:ChangeEvent<HTMLSelectElement>)=>{
    setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option value={""}>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={"it"}/>