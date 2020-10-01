import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Tooltip, Button, Menu } from 'antd';
import { logo } from '../../assets/images';
import './style.scss';

import {
    MailOutlined,
    PhoneOutlined,
    TwitterOutlined,
    FacebookOutlined,
    InstagramOutlined,
} from '@ant-design/icons';
import { Link, BrowserRouter as Router } from 'react-router-dom';
const menu = (key, label) => <Menu.Item key={key}>{label}</Menu.Item>;
export default class Footer extends React.Component {
    state = {
        current: 'hompages',
        visible: false,
    };
    render() {
        const { current } = this.state;
        return (
            <div>
                <div className="footer">
                    <div className="container" style={{ position: 'relative' }}>
                        <Row style={{ position: 'relative' }}>
                            <Col sm={24} md={24} lg={8} xl={8} className="logo-footer">
                                <img src={logo} alt="logo" />
                                <div>Fitness Center</div>
                            </Col>
                            <Col sm={24} md={12} lg={8} xl={8} className="list-contact">
                                <h3>Quick Contacts</h3>
                                <div className="txt-des">
                                    50 Raritan Center Pkwy, Edison, NJ 08837, USA
                                </div>
                                <div style={{ paddingBottom: 12 }}>
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
                                <div className="group-icon">
                                    <Router>
                                        <ul>
                                            <li>
                                                <Tooltip trigger="click" title="Social Media">
                                                    <Link to="./facebook">
                                                        <FacebookOutlined />
                                                    </Link>{' '}
                                                </Tooltip>
                                            </li>
                                            <li>
                                                <Tooltip trigger="click" title="Social Media">
                                                    <Link to="./global">
                                                        <TwitterOutlined />
                                                    </Link>
                                                </Tooltip>
                                            </li>
                                            <li>
                                                <Tooltip trigger="click" title="Social Media">
                                                    <Link to="./global">
                                                        <InstagramOutlined />
                                                    </Link>
                                                </Tooltip>
                                            </li>
                                        </ul>
                                    </Router>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8} xl={8} className="list-btn">
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
                    </div>
                </div>
                <div className="menu-item" id="menu">
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                        className="menu-footer"
                    >
                        {menu('homepages', 'HOMPAGE')}
                        {menu('pages', 'PAGES')}
                        {menu('classes', 'CLASSES')}
                        {menu('news', 'NEWS')}
                        {menu('contact', 'CONTACTS')}
                    </Menu>
                </div>

                <div className="copyright">©2019 Prelude by Gym-Co. All Rights Reserved</div>
            </div>
        );
    }
}
