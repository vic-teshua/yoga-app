import React from "react";

function HowTo({ title, caption, img }) {
    return (
        <div className="col-lg-3  ">
            <div className="d-flex flex-column gap-5  bg-white p-5 text-center ">
                <i className={img} alt="" />
                <h4>{title}</h4>
                <p>{caption}</p>
            </div>
        </div>
    );
}

export default HowTo;
