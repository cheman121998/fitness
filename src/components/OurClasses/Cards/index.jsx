import React from 'react';
import './style.scss';
import { Card, Tooltip, Button } from 'antd';

import { dataCardClasses } from '../../../api/Data';

const ListCart = ({ title, description, image }) => (
    <Card style={{ width: '33%' }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image">
            <img alt="example" width="100%" src={image} />
        </div>
        <div className="custom-card">
            <h3>{title}</h3>
            <div className="line-our-classes"></div>
            <p>{description}</p>
            <Tooltip trigger="click">
                <Button className="btn-advanced">READ MORE</Button>
            </Tooltip>
        </div>
    </Card>
);
class Cards extends React.Component {
    render() {
        return (
            <div className="cards">
                <div className="group-card">
                    {dataCardClasses.slice(0, 6).map((e, i) => (
                        <ListCart
                            key={i}
                            title={e.title}
                            description={e.description}
                            image={e.image}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Cards;
