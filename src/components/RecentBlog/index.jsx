import React from 'react';
import './style.scss';
import { Row, Col, Card, Avatar } from 'antd';
import { GlobalOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { avt } from '../../assets/images';

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
                        <Col className="gutter-row card-right" span={16}>
                            <Card
                                style={{ width: '100%' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                            >
                                <div className="content-blog">
                                    <Row>
                                        <Col xs={24} md={12} lg={12}>
                                            <div className="title-card">
                                                21 Top Fitness Blogs You Should Follow in 2020
                                            </div>
                                        </Col>
                                        <Col xs={24} md={12} lg={12}>
                                            <img className="avt" src={avt} alt="avatar" />
                                        </Col>
                                    </Row>
                                    <Row className="txt-blog">
                                        <div className="divide">
                                            <p>
                                                Culpa qui officia deserunt mollit anim id est
                                                laborum. Sed ut perspiciatis unde omnis iste natus
                                                error sit voluptartem accusantium doloremque
                                                laudantium, totam rem aperiam, eaque ipsa quae ab
                                                illo inventore veritatis et quasi ropeior architecto
                                                beatae vitae dicta sunt explicabo. Nemo eniem ipsam
                                                voluptatem quia voluptas sit aspernatur aut odit aut
                                                fugit, sed quia consequuntur magni dolores eosep
                                                quiklop ratione voluptatem sequi nesciunt. Neque
                                                porro quisquam est, quepi dolorem ipsum quia dolor
                                                srit amet, consectetur adipisci velit, seid quia non
                                                numquam eiuris modi tempora incidunt ut labore et
                                                dolore magnam aliquam quaerat iope voluptatem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipisifwcing elit, sed do eiusmod tempor incididunt
                                                ut labore et dolore roipi magna aliqua. Ut enim ad
                                                minim veeniam, quis nostruklad exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in tufpoy
                                                voluptate velit esse cillum dolore eu fugiat nulla
                                                parieratur. Excepteur sint occaecat cupidatat.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipisifwcing elit, sed do eiusmod tempor incididunt
                                                ut labore et dolore roipi magna aliqua. Ut enim ad
                                                minim veeniam, quis nostruklad exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in tufpoy
                                                voluptate velit esse cillum dolore eu fugiat nulla
                                                parieratur. Excepteur sint occaecat cupidatat.
                                            </p>
                                            <div className="line"></div>
                                            <p className="quote">
                                                “Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id
                                                est laborum. Sed ut perspiciatis unde omnis iste
                                                natus error sit voluptatem.”
                                            </p>
                                        </div>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
