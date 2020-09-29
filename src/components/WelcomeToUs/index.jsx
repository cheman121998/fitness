import React from 'react';
import './style.scss';
import Cards from './Cards';
import Content from './Content';
import Video from './Video';
import { Row, Col } from 'antd';

class WelcomeToUS extends React.Component {
    render() {
        return (
            <div className="welcome-tous">
                <div className="container">
                    <Cards />
                    <Row style={{ marginTop: '194px;' }}>
                        <Col xs={24} md={12} lg={12}>
                            <Content />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Video />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default WelcomeToUS;
