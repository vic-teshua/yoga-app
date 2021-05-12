import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function HowTo({ number, step }) {
    return (
        <div>
            <h3>
                {number} <FontAwesomeIcon icon={faCoffee} />
            </h3>

            <p>{step}</p>
        </div>
    );
}

export default HowTo;
