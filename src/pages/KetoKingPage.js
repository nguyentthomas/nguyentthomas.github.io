import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function KetoKingPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                
            </Content>
        </div>
    )
}

export default KetoKingPage;