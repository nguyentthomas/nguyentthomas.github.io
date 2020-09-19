import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function PlantamagotchiPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <h5>My Role:</h5>
                <p>This project was completed collaboratively as part of the “Prototyping Physical Interaction” unit as part
                of
                my major at studying at University of Technology Sydney, within a group of five including Marc
                Pulumbarit,
                Daniel Tran, Kevin Chov, Derry Jasin and myself (Thomas Nguyen). Within this project, my role was to
                designate roles and control the design flow, as well as contribute to the overall design. This also
                included
				prototyping, testing, and coding for the electronics.</p>

                <h5>The Problem</h5>
                <p></p>

                <h5>The Approach</h5>
                <p>Reflecting on the problem at hand, </p>

                <h5>Usability Testing / User Studies</h5>
                <p></p>

                <h5>Overview of Final Functional Prototype</h5>
                <p>The Plantamagotchi is a physically interactive project that aimed to provide users a learning experience
                while tying in
                physical elements that enhanced their interactions, providing more value and instant entertainment to a
                slow
                and gradual
                process. Ideation and formulation of prototype and design was done through a variety of sessions that
                ultimately
                amounted to become the Plantamagotchi in its final form. The plantamagotchi provided varying levels of
                feedback to
                users, with the purpose of “game”-ifying the experience of having a potted plant where the premise was
                to
                cater to the
                needs and requirements of the plant (soil moisture, temperature, pH level and ambient humidity) of the
                given
                parameters
				in plant and its digital counterpart to stay alive.</p>
            </Content>
        </div>
    )
}

export default PlantamagotchiPage;