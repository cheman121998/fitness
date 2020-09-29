import React from 'react';
import './style.scss';
import Content from './Content';
import { Row, Col } from 'antd';
import KatlimineCore from './KatlimineCore';
import FirstOwlCarousel from './FirstOwlCarousel';
import SecondOwlCarousel from './SecondOwlCarousel';

export default class OurTrainer extends React.Component {
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
