import React from 'react';
import { Form, Input, Button, Tooltip, Row, Col, Select } from 'antd';
import { TwitterOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './style.scss';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}
export default class ContactUs extends React.Component {
    render() {
        return (
            <div id="contact-us">
                <div className="mask-cover"></div>
                <div className="title">
                    <h2>Contact Us</h2>
                    <div className="line"></div>
                </div>
                <Form>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Input placeholder="Email" />
                        </Col>
                        <Col span={12}>
                            <Select
                                defaultValue="lucy"
                                style={{ width: 120 }}
                                onChange={handleChange}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Form.Item name={['user', 'introduction']}>
                        <Input.TextArea
                            className="form-des"
                            placeholder="Write Your Message Here..."
                        />
                    </Form.Item>
                    <Tooltip trigger="click" title="Btn Sumbit">
                        <Button>Submit</Button>
                    </Tooltip>
                </Form>
                <div className="contact">
                    <div>
                        <span className="email">Email@Example.Com</span>
                        <span className="phone">002-010-66269735</span>
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
                                            <LinkedinOutlined />
                                        </Link>
                                    </Tooltip>
                                </li>
                            </ul>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}
