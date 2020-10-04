import React from 'react';
import './style.scss';
import { Card, Button, Row, Col } from 'antd';
import { dataCard } from '../../../api/Data';

const { Meta } = Card;
const ListCard = ({ title, description, background, price, mask }) => (
    <Col xs={24} md={24} lg={8}>
        <Card
            style={
                ({ width: '30%' },
                { backgroundColor: { mask } },
                { background: `url(${background})` })
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
                        {console.log('dataCard', dataCard)}
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
