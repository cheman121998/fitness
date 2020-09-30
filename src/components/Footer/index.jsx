import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Tooltip, Button, Menu } from 'antd';
import { logo } from '../../assets/images';
import './style.scss';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

export default class Footer extends React.Component {
    state = {
        current: 'hompages',
        visible: false,
    };
    render() {
        const { current } = this.state;
        return (
            <div className="footer">
                <div className="container" style={{ position: 'relative' }}>
                    <Row>
                        <Col sm={24} md={8} lg={8} xl={8} className="logo-footer">
                            <img src={logo} alt="logo" />
                            <div>Fitness Center</div>
                        </Col>
                        <Col sm={24} md={8} lg={8} xl={8}>
                            <h3>Quick Contacts</h3>
                            <div>50 Raritan Center Pkwy, Edison, NJ 08837, USA</div>
                            <div>
                                <span>
                                    <PhoneOutlined />
                                </span>
                                <span>8080000000</span>
                            </div>
                            <div>
                                <span>
                                    <MailOutlined />
                                </span>
                                <span>8080000000</span>
                            </div>
                        </Col>
                        <Col sm={24} md={8} lg={8} xl={8}>
                            <h3>Popular Tags</h3>
                            <Tooltip trigger="click" title="WORKOUT">
                                <Button>WORKOUT</Button>
                            </Tooltip>
                            <Tooltip trigger="click" title="CROSSFIT">
                                <Button>CROSSFIT</Button>
                            </Tooltip>
                            <Tooltip trigger="click" title="SHEDULE">
                                <Button>SHEDULE</Button>
                            </Tooltip>
                            <Tooltip trigger="click" title="TRAINERS">
                                <Button>TRAINERS</Button>
                            </Tooltip>
                            <Tooltip trigger="click" title="BOXING">
                                <Button>BOXING</Button>
                            </Tooltip>
                            <Tooltip trigger="click" title="SHEDULE">
                                <Button>SHEDULE</Button>
                            </Tooltip>
                            <Tooltip trigger="click" title="NUTRITION">
                                <Button>NUTRITION</Button>
                            </Tooltip>
                            <Tooltip trigger="click" title="GYM">
                                <Button>GYM</Button>
                            </Tooltip>
                            <Tooltip trigger="click" title="PLANS">
                                <Button>PLANS</Button>
                            </Tooltip>
                        </Col>
                    </Row>

                    <Menu
                        className="menu-footer"
                        onClick={this.handleClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="hompages">HOMEPAGE</Menu.Item>
                        <Menu.Item key="pages">PAGES</Menu.Item>
                        <Menu.Item key="classes">CLASSES</Menu.Item>
                        <Menu.Item key="news">NEWS</Menu.Item>
                        <Menu.Item key="contact">CONTACTS</Menu.Item>
                    </Menu>

                    <div className="copyright">©2019 Prelude by Gym-Co. All Rights Reserved</div>
                </div>
            </div>
        );
    }
}
