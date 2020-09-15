import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <Hero title={this.props.title} />
                <Content>
                    <h1><a href="mailto:nguyen.thomastri@gmail.com">Email Me!</a></h1>
                </Content>
            </div>
        )
    }

}


export default ContactPage;