import React from "react";


function HowTo({ number, step }) {
    return (
        <div>
            <h3>
                {number} <i className="fa fa-coffee"/>
            </h3>

            <p>{step}</p>
        </div>
    );
}

export default HowTo;
