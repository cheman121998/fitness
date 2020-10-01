import React from 'react';
import './style.scss';
import { Card, Button, Row, Col } from 'antd';
import { dataCard } from '../../../api/Data';

const { Meta } = Card;
const ListCard = ({ title, description, background, price, mask }) => (
    <Card style={({ width: '30%' }, { background: { background } }, { backgroundColor: { mask } })}>
        <Meta title={title} description={description} />
        <Button>${price}*/M</Button>
    </Card>
);
class Cards extends React.Component {
    render() {
        // const { listCards } = this.props;
        return (
            <div className="cards">
                <div className="container">
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            {dataCard.slice(0, 2).map((e, i) => (
                                <ListCard
                                    key={i}
                                    title={e.title}
                                    description={e.description}
                                    background={e.background}
                                    price={e.price}
                                    backgroundColor={e.mask}
                                />
                            ))}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Cards;
