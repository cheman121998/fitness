import React from 'react';
import './style.scss';
import { Card, Button, Row, Col } from 'antd';

const { Meta } = Card;
const card = (cardTitle, cardDes, cardBg, cardBtn) => (
    <Card
        style={({ width: 300 }, { background: { cardBg } })}
        cover={<div className="mask-cover"></div>}
    >
        <Meta title={cardTitle} description={cardDes} />
        <Button>${cardBtn}/M</Button>
    </Card>
);
class Cards extends React.Component {
    render() {
        return (
            <div className="cards">
                <div className="container">
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            {card(
                                'BODY BULDING CLASSES',
                                'Trained under best trainers',
                                'abc',
                                '99*',
                            )}
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            {card(
                                'BODY BULDING CLASSES',
                                'Trained under best trainers',
                                'abc',
                                '99*',
                            )}
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            {card(
                                'BODY BULDING CLASSES',
                                'Trained under best trainers',
                                'abc',
                                '99*',
                            )}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Cards;
