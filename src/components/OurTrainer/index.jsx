import React from 'react';
import './style.scss';
import Content from './Content';
import { Row, Col } from 'antd';
import KatlimineCore from './KatlimineCore';
import FirstOwlCarousel from './FirstOwlCarousel';
import SecondOwlCarousel from './SecondOwlCarousel';
import { dataSlider1Trainer } from '../../api/Data';

const ran = (max) => Math.floor(Math.random() * Math.floor(max));

export default class OurTrainer extends React.Component {
    state = {
        listSliders: [],
    };

    componentDidMount() {
        this.randomSlider();
    }

    randomSlider = () => {
        let number = ran(dataSlider1Trainer.length - 3);
        let newArray = [];

        for (let i = number; i < number + 3; i++) {
            newArray.push(dataSlider1Trainer[i]);
        }
        this.setState({ listSliders: newArray });
    };
    render() {
        return (
            <div className="our-trainer">
                <Content />
                <div className="container">
                    <Row>
                        <Col xs={24} md={12} lg={8}>
                            <KatlimineCore />
                        </Col>
                        <Col xs={24} md={12} lg={16}>
                            <FirstOwlCarousel />
                        </Col>
                    </Row>
                </div>
                <SecondOwlCarousel />
            </div>
        );
    }
}
