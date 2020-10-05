import React from 'react';
import './style.scss';
import Cards from './Cards';
import Content from './Content';
import Video from './Video';
import { Row, Col } from 'antd';
import { dataCard } from '../../api/Data';

const ran = (max) => Math.floor(Math.random() * Math.floor(max));

class WelcomeToUS extends React.Component {
    state = {
        listCards: [],
    };

    componentDidMount() {
        this.randomCard();
    }

    randomCard = () => {
        let number = ran(dataCard.length - 3);
        let newArray = [];

        for (let i = number; i < number + 3; i++) {
            newArray.push(dataCard[i]);
        }
        this.setState({ listCards: newArray });
    };

    render() {
        return (
            <div className="welcome-tous">
                <div className="container">
                    <Cards />
                    <Row>
                        <Col xs={24} md={24} lg={12}>
                            <Content />
                        </Col>
                        <Col xs={24} md={24} lg={12}>
                            <Video />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default WelcomeToUS;
