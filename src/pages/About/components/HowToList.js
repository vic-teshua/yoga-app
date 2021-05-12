import React from "react";
import HowTo from "./HowTo";

function HowToList({ number, step }) {
    return (
        <div>
            <HowTo number={"1"} step={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />
            <HowTo number={"2"} step={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />
            <HowTo number={"3"} step={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />
        </div>
    );
}

export default HowToList;
