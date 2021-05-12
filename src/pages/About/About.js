import React from "react";
import History from "./components/History";
import "./About.css";
import HowToList from "./components/HowToList";

function About() {
    return (
        <div>
            <h2>About Us</h2>
            <section className="aboutUsSection">
                <img
                    src="https://images.unsplash.com/photo-1552196527-bffef41ef674?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHlvZ2F8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat, deserunt temporibus autem natus quae, minus alias amet, veniam
                    omnis aspernatur placeat doloribus id. Nisi ipsa ducimus reprehenderit soluta beatae! Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit.
                    <br />
                    <br />
                    Nemo dolor unde, distinctio perferendis itaque aspernatur id mollitia doloremque. Quaerat delectus eos voluptatum eveniet error aliquam
                    voluptas ullam consequatur natus eum.
                </p>
            </section>

            <section>
                <h3>History behind the health</h3>
                <div className="historySection">
                    <History />
                    <History />
                    <History />
                </div>
            </section>

            <section>
                <h3>How to use the app</h3>
                <div className="howToSection">
                    <HowToList />
                </div>
            </section>
        </div>
    );
}

export default About;
