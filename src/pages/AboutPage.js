import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>I'm a UX designer and Web Developer, currently located in Sydney. I'm passionate about designing unique and engaging experiences. In order to aid in visualising and conceptualising these experience,
                I am well equipped in prototyping tools, specifically Sketch, Figma and Adobe XD. I am a graduate with a Bachelor's of Science (in Information Technology) and a Interaction Design Major.</p>
                <p>With expertise to create and develop within multiple programming languages, technologies and frameworks, of which include: JavaScript(Node JS, React), PHP, Python, Java and, of course, HTML and CSS.
                I'm constantly learning new things. Currently, those things include gaining more experience with JavaScript, specifically React, Node JS as well as App Development with React Native and XCode/Swift.
                </p>
                <p>I also have experience with designing components and graphics using the Adobe Creative Suite (Photoshop, Illustrator and Premiere Pro.)</p>
                <p>I have worked on multiple projects that are done myself or done so collaboratively to hone my skills and mindset while always looking to learn effectively and quickly.
                Outside of that, I love drawing, sketching as well as tinkering with electronics and reading.</p>
                <p>My dream is to develop products/services that are innovative, and seamless in aligning its usage with the habits and lifestyle of the user.</p>
            </Content>
        </div>
    )
}

export default AboutPage;