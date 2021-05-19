import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import HowToList from "./components/HowToList";

function About() {
    return (
        <div>
            <section className="aboutUsSection ">
                <div className="row featurette">
                    <div className="col-md-6 align-self-center">
                        <h2 className="featurette-heading">Yoga - strike the pose!</h2>
                        <p>
                            In a world of hundreds of objects, thousands of tasks and uncountable things needing your attention… <br />
                            You need just one thing - Yoga!
                            <br />
                            <br /> But where do you start? Online, the library, a groovy guru?
                            <br />
                            <br /> We’d like to help! <br />
                            Viktoria's Yoga App, makes things simple with an easy to use drag and drop card system. <br />
                            <br />
                            Giving you control and letting you Yoga - without the stress.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            className="featurette-image img-fluid mx-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: 500x500"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                            src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            {/* HISTORY SECTION */}

            <section className="aboutUsSection historySection ">
                <div className="row featurette d-flex ">
                    <div className="col-md-6">
                        <div className="col-md-6 d-flex flex-row">
                            <img
                                className="featurette-image img-fluid mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: 500x500"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                                src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZXNzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
                            <img
                                className="featurette-image img-fluid mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: 500x500"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                                src="https://images.unsplash.com/photo-1517898717281-8e4385a41802?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHN0cmVzc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
                        </div>
                        <div className="col-md-6 d-flex flex-row">
                            <img
                                className="featurette-image img-fluid mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: 500x500"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                                src="https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHlvZ2F8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
                            <img
                                className="featurette-image img-fluid mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: 500x500"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                                src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZXNzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-md-6 align-self-center ps-5">
                        <h2 className="featurette-heading">...where we’re coming from</h2>
                        <p>
                            We love Yoga!
                            <br />
                            It relieves stress, is a great work out and brightens our daily life.
                            <br />
                            <br /> However not all of us have the time or space to do yoga in a meaningful way. <br />
                            The answer to this, came from the creation of the Viktoria's Yoga App.
                            <br />
                            <br /> Our idea was to let people get inspired and decide on a routine that would be make yoga work for them, and fit into their
                            lives.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container-fluid mt-4 howToSection">
                <h2 className="text-center p-3">How to use the app</h2>
                <div>
                    <HowToList />
                </div>

                 <div className="row">
                    <div className="col text-center p-1 mb-5 ">
                        <button className="p-3 btn4">
                            <Link to="/login">Use the App</Link>
                        </button>
                    </div>
                </div> 
            </section>

        </div>
    );
}

export default About;
