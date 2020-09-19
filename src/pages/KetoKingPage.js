import React from "react";

//import Components
import Hero from "../components/Hero";
import Content from "../components/Content";

//import images


//main content
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
                    way. I was part of a small team of four, where I was responsible for leading the collaboration as well
                    as the research, design and implementing the features and overall user experience related to a native
                    iOS application for the purpose of facilitating a learning experience for users into the Keto-genic
                    diet.
            </p>

                <h5>The Problem</h5>
                <p>We were tasked with providing an engaging and unique experience to further provide an interaction
                that also facilitates an educational purpose. </p>

                <h5>The Approach</h5>
                <p>Over a total of four 3-week sprints that spanned over 14 weeks, we sought to produce a functional product that was later pitched to a panel. 
                The first sprint involved ideation sessions with a low fidelity prototype and minimum viable product being defined by the end of the 3rd week.
                Upon multiple design ideas (to name a few, Fit-bit social media Dog Collar, Fish Monitoring App, MoveIt - a motion tracking device that critiques users on particular dance moves or exercise techniques). 
                It was finally discussed and deliberated upon that the most challenging and interesting idea to pursue was a Food and Image Recognition Idea.
                </p>
               
                <p>
                With the following sprints, 
                </p>
                
                <h5>Usability Testing / User Studies</h5>
                <p>
                    
                </p>

                <h5>Overview of Final Functional Prototype</h5>
                <p>Here's a preview of the functional prototype in a typical use-case: <a href="https://www.youtube.com/watch?v=bIP5VCpZhNM">https://www.youtube.com/watch?v=bIP5VCpZhNM</a></p>
            </Content>
        </div>
    )
}

export default KetoKingPage;