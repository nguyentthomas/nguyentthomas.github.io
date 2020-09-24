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
                <p>As this was a university project, Prototyping Physical Interaction asked students to cater educational value and implement it to a interactive and physical game.</p>

                <h5>The Approach</h5>
                <p>It seeked to provide the purpose of game-ifying the experience of having a potted plant. 
                    The basic needs and requirements of the plant (soil moisture, temperature, pH level and ambient humidity) were the given parameters in which was required for the plant and its equivalent digital avatar to stay alive. 
                    Users were provided positive feedback (through positive reinforcement of a happy avatar), when the values of the needs were within range, allowing users to understand that the plant was happy with their conditions. 
                    If the parameters were not met, the plant would screech and cry, with a sad avatar displayed on the LCD display. 
                    This encouraged users to befriend the plant and increase the likelihood of coming back and taking care of the plant as a "pet".
</p>

                <h5>Usability Testing / User Studies</h5>
                <p>This project proved to ultimately provide me with experience where it was my first exposure to assisting in conducting user studies and usability tests that I would come to appreciate as an effective tool for designing using Human-centred design principles. 
                     It also brought to my attention, physical design requirements and the accessibility that comes with it, to which plays a crucial role in the experience of users. <br/><br/>
                     Through the collection of data collected through the user study, it was possible to gain further insights into the design with the inclusion of understanding the user needs gazing through their perspectives. The protocol of the user study, had a rather small sample size of 5, included enlisting a week-long experiment session, with a concluding short non-invasive 30 question interview, where the answers were transcribed immediately. The user study provided information on the prototype design, noting positive features as well as many features to improve upon. From the data, the findings can be categorised into the following common aspects, (being grouped to a relative concept). 
                     
                     With this particular usability test and user study, we interviewed a total of 8 participants where users were asked to initially use the device in particular use cases and was then asked a series of questions, guaging their reactions and answers in order to understand their feelings and gather valuable insights.
                     <br/><br/>In particular, a series of insights was gained from user assessments, to which some of the pain points are:
                     <ul>
                        <li>Structure & Aesthetics: “It is not pleasing to the eye. It’s messy”. </li>
                        <li>Usability & Quality of Life Improvements: 
                            <ul>
                                <li>“I don’t think it would be well accustomed to busy people, as I don’t see why they would clog up their schedule”</li>
                                <li>“Make it as wireless as possible”</li>
                                <li>“Screen could be made portable so that more monitoring can happen away from the plant” </li>
                            </ul>
                        </li>
                        <li>User Engagement and Feedback (Visual and/or Audio): Two of the user study participants expressed their concern on how the entire device should be powered.</li>
                     </ul>
                     Recommendations were also made by users to which team members and I considered with our own input on the basis of improving the Plantamagotchi in the aspects mentioned prior.
                     <ul>
                        <li>For an enhanced experience, where the purpose of the prototype is to bring a more personal and engaging connection between the user and the plant, this is most definitely a glaring issue that must be rectified with future iterations. Alterations should involve an overarching theme, neatly packaging all of the internal components. This would allow it to appear more cohesive and as though it is not just hacked together. Suggestions also included references to concerns to wires and portability, where a solar-panel or powered solution would need to be worked into the design, as this would directly affect user's engagement.</li>
                        <li>One suggestion was to include “Buttons to change displays – for measurements of different plant attributes” to improve the navigation and ease of use. Designing an experience with feedback like this in mind, will directly address the user’s needs. Some recommendations that were considered were increasing the size of the screen (specifically a 8x8 RGB LED Matrix to displays states of faces by having pre-programmed states that could enact when prompted by certain conditions.), or notifications displayed directly to the phone (though this could prove 'annoying' and frustrating for the user as to overwhelm them with constant updates) and another was providing navigation through a potentiometer to access 'pages' to the LCD screens whilst paired with the 8x8 LED to allow for more user input and control.</li>
                        <li>The lack of engagement and audio feedback was a prominent issue amongst almost all of the user study participants. To address this, we will be implementing an array of pre-recorded lines to appeal to the user’s need of a social aspect, notifying them of instances when the plant is in need of assistance, rather than the users having to constantly monitor and look at the plant to maintain ideal conditions. The engagement levels needed to provide a more human-like interaction that was engaging. With one user suggesting that it should be able to talk and respond to what the user was saying, giving it a personality able to reply through dialogue. More interaction could be implemented in the form of mini games, or games that were tangential to the original purpose. Suggestions such as a leader board using a “competitive point system.”</li>

                     </ul>
                     </p>

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