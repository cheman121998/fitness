import React from 'react';
import './style.scss';
import { Row, Col, Card } from 'antd';
import { GlobalOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default class RecentBlog extends React.Component {
    render() {
        return (
            <div className="recent-blog">
                <div className="container">
                    <div className="title">
                        <h2>Recent Blog </h2>
                        <div className="line"></div>
                    </div>
                    <Row gutter={16}>
                        <Col className="gutter-row card-left" span={8}>
                            <Card
                                style={({ width: '100%' }, { padding: '30px' })}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[
                                    <GlobalOutlined label="Long Name Here" key="global" />,
                                    <ClockCircleOutlined label="1h ago" key="edit" />,
                                ]}
                            >
                                <Meta
                                    title="This Harvard Student Ran 70 Miles Back to College"
                                    description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis."
                                />
                            </Card>
                            <Card
                                style={({ width: '100%' }, { padding: '30px' })}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[
                                    <GlobalOutlined title="Long Name Here" key="global" />,
                                    <ClockCircleOutlined title="1h ago" key="edit" />,
                                ]}
                            >
                                <Meta
                                    title="Female Boxers Describe What It’s Like to Take a Punch"
                                    description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis."
                                />
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={16}>
                            <Card
                                style={{ width: '100%' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                            >
                                <Meta
                                    title="Card title"
                                    description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis."
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
