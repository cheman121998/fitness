import React from 'react';
import './style.scss';
import { Card, Button, Row, Col } from 'antd';
import { dataCard } from '../../../api/Data';

const { Meta } = Card;
const ListCard = ({ title, description, background, price, mask }) => (
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <Card
            style={
                ({ width: '30%' }, { background: { background } }, { backgroundColor: { mask } })
            }
        >
            <Meta title={title} description={description} />
            <Button>${price}*/M</Button>
        </Card>
    </Col>
);
class Cards extends React.Component {
    render() {
        return (
            <div className="cards">
                <div className="container">
                    <Row>
                        {dataCard.slice(0, 3).map((e, i) => (
                            <ListCard
                                key={i}
                                title={e.title}
                                description={e.description}
                                background={e.background}
                                price={e.price}
                                backgroundColor={e.mask}
                            />
                        ))}
                    </Row>
                </div>
            </div>
        );
    }
}

export default Cards;
