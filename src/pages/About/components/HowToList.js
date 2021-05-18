import React from "react";
import HowTo from "./HowTo";

const howToData = [
    {
        id: 1,
        title: "1. Search and Select Yoga Cards",
        caption: "There are over 40 unique yoga poses to use.  Finding the right ones is easy, with the ability to search by name or difficulty.",
        img: "fas fa-search fa-7x",
    },
    {
        id: 2,
        title: "2. Drag and Drop cards",
        caption: "Like a pose? Drag and drop a card to create your own yoga work out. Click on the card to get instructions and even benefits.",
        img: "far fa-hand-pointer fa-7x",
    },
    {
        id: 3,
        title: "3. You’re Done",
        caption:
            "With your workout created, you can immediately start to do what you love - Yoga! You can also tweak and reorder the cards, to get an even better fit.",
        img: "fas fa-child fa-7x",
    },
];

function HowToList() {
    return (
        <div className="d-flex justify-content-around p-3 flex-wrap">
            {howToData.map((step) => {
                return <HowTo key={step.id} {...step}></HowTo>;
            })}
        </div>
    );
}

export default HowToList;
