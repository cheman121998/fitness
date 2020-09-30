import React from 'react';
import { Form, Input, Button, Cascader, Tooltip, Row, Col } from 'antd';
import { TwitterOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './style.scss';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

export default class ContactUs extends React.Component {
    render() {
        return (
            <div id="contact-us">
                <div className="mask-cover"></div>
                <div className="title">
                    <h2>Contact Us</h2>
                    <div className="line"></div>
                </div>
                <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
                    <Row>
                        <Col>
                            <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                                <Input placeholder="Email" />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item
                                name="residence"
                                rules={[
                                    {
                                        type: 'array',
                                        required: true,
                                        message: 'Please select your habitual residence!',
                                    },
                                ]}
                            >
                                <Cascader placeholder="Subjects" options={residences} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item name={['user', 'introduction']}>
                        <Input.TextArea placeholder="Write Your Message Here..." />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
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
                                            <InstagramOutlined />
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
