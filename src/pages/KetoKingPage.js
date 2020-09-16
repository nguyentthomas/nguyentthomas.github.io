import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function KetoKingPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <h5>My role:</h5>
                <p>
                    This project took place during my final semester at University from July 2019 – October 2019. It was a
                    final project as a student to showcase my skills that I had accumulated over the years throughout the
                    Interaction Design course at the University of Technology Sydney as well as learning myself along the
                    way. I was part of a small team of three, where I was responsible for leading the collaboration as well
                    as the research, design and implementing the features and overall user experience related to a native
                    iOS application for the purpose of facilitating a learning experience for users into the Keto-genic
                    diet.
            </p>

                <h5>The Problem</h5>
                <p></p>

                <h5>The Approach</h5>
                <p></p>

                <h5>Usability Testing / User Studies</h5>
                <p></p>

                <h5>Overview of Final Functional Prototype</h5>
                <p><a href="https://www.youtube.com/watch?v=bIP5VCpZhNM">https://www.youtube.com/watch?v=bIP5VCpZhNM</a></p>
            </Content>
        </div>
    )
}

export default KetoKingPage;