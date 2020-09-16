import React from "react";

//import components
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//import images
import ninetyFiveXLogo from "../images/95x.png";
import ketoKingLogo from "../images/ketoKing.png";
import activeBingoLogo from "../images/activeBingo.png";

//class
class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                id: 0,
                title: "95x eSports",
                subTitle: "Online Competitive Team Official Website",
                imgSrc: ninetyFiveXLogo,
                link: "https://www.95xesports.com",
                selected: false
            },
            {
                id: 1,
                title: "KetoKing",
                subTitle: "iOS App helping users to incorporate keto into their diet.",
                imgSrc: ketoKingLogo,
                link: "/ketoKing",
                selected: false
            },
            {
                id: 2,
                title: "ActiveBingo",
                subTitle: "Active Living, enhancing lives and experiences as you age.",
                imgSrc: activeBingoLogo,
                link: "/activeBingo",
                selected: false
            },
            {
                id: 3,
                title: "Plantamagotchi",
                subTitle: "'Growing plants like pets.' Physical interactive game.",
                //imgSrc: dummy,
                link: "/plantamagotchi",
                selected: false
            }
            ]
        }

    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;