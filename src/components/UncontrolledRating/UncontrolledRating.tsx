import React, {useState} from "react";

type RatingPropsType = {

}
type StarPropsType = {
    selected: boolean
    setValue:(value :1|2|3|4|5) => void
}
export function UncontrolledRating(props:RatingPropsType) {
    let [value, setValue] = useState(0)

        return (
            <div>
                <Star selected={value > 0} setValue = {()=> setValue(1)} />
                <Star selected={value > 1} setValue = {()=> setValue(2)} />
                <Star selected={value > 2} setValue = {()=> setValue(3)} />
                <Star selected={value > 3} setValue = {()=> setValue(4)} />
                <Star selected={value > 4} setValue = {()=> setValue(5)} />
            </div>
        )
    }

function Star(props: any) { 
    console.log('Star rendered')
    // return props.selected ? <span><b>Star  </b></span> : <span>Start  </span>
    return <span onClick={() => { props.setValue()}   }>
        {props.selected ? <b>Star  </b> : "Star"}
    </span>
}