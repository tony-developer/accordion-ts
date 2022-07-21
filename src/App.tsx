import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {
    ControlledCheckBox,
    ControlledInput, ControlledSelect,
    GetValueUncontrolledInputByButtonPress,
    TrackValueUncontrolledInput,
    UncontrolledInput
} from "./stories/Input";
import {MenuCollapsedMode, UserCollapsedMode} from "./stories/Accordeon2";
import {Select} from "./components/select/select";


function App() {
    console.log('App rendered')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>( false )
    return (
        <div className="App">
            {/*<PageTitle title={'PageTitle rendering'}/>
            <Rating value={3}/>
            <Accordion title={'Accordion 1'}/>
            <Accordion title={'Accordion 2'}/>
            <Rating value={4}/>*/}
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/*<UncontrolledAccordion titleValue ={'Manu'}/>*/}
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            {/*<Accordion titleValue={"Menu"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            {/*<UncontrolledAccordion titleValue ={'Users'}/>*/}
            <UncontrolledRating/>

            {/*<UncontrolledInput/>*/}
            {/*<TrackValueUncontrolledInput/>*/}
            {/*<GetValueUncontrolledInputByButtonPress/>*/}
            {/*<ControlledInput/>*/}
            {/*<ControlledCheckBox/>*/}
            <ControlledSelect/>
            <MenuCollapsedMode/>
            <UserCollapsedMode/>
        </div>
    );
}

export default App;

type PageTitlePropsType = {
    title: string
}
function PageTitle (props: PageTitlePropsType) {
    // debugger
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}



