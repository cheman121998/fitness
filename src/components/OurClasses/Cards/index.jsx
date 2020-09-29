import React from 'react';
import './style.scss';
import { Card } from 'antd';
import { cardGirlBoy } from '../../../assets/images';

class Cards extends React.Component {
    render() {
        return (
            <div className="cards">
                <div className="group-card">
                    <Card style={{ width: '33%' }} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                            <img alt="example" width="100%" src={cardGirlBoy} />
                        </div>
                        <div className="custom-card">
                            <h3>Europe Street beat</h3>
                            <div className="line-our-classes"></div>
                            <p>
                                If you run a fitness gym, this is one slogan that can bring
                                customers in. No one likes having to drive miles out of their way to
                                go to the gym.
                            </p>
                        </div>
                    </Card>
                    <Card style={{ width: '33%' }} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                            <img alt="example" width="100%" src={cardGirlBoy} />
                        </div>
                        <div className="custom-card">
                            <h3>Europe Street beat</h3>
                            <div className="line-our-classes"></div>
                            <p>
                                If you run a fitness gym, this is one slogan that can bring
                                customers in. No one likes having to drive miles out of their way to
                                go to the gym.
                            </p>
                        </div>
                    </Card>
                    <Card style={{ width: '33%' }} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                            <img alt="example" width="100%" src={cardGirlBoy} />
                        </div>
                        <div className="custom-card">
                            <h3>Europe Street beat</h3>
                            <div className="line-our-classes"></div>
                            <p>
                                If you run a fitness gym, this is one slogan that can bring
                                customers in. No one likes having to drive miles out of their way to
                                go to the gym.
                            </p>
                        </div>
                    </Card>
                    <Card style={{ width: '33%' }} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                            <img alt="example" width="100%" src={cardGirlBoy} />
                        </div>
                        <div className="custom-card">
                            <h3>Europe Street beat</h3>
                            <div className="line-our-classes"></div>
                            <p>
                                If you run a fitness gym, this is one slogan that can bring
                                customers in. No one likes having to drive miles out of their way to
                                go to the gym.
                            </p>
                        </div>
                    </Card>
                    <Card style={{ width: '33%' }} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                            <img alt="example" width="100%" src={cardGirlBoy} />
                        </div>
                        <div className="custom-card">
                            <h3>Europe Street beat</h3>
                            <div className="line-our-classes"></div>
                            <p>
                                If you run a fitness gym, this is one slogan that can bring
                                customers in. No one likes having to drive miles out of their way to
                                go to the gym.
                            </p>
                        </div>
                    </Card>
                    <Card style={{ width: '33%' }} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                            <img alt="example" width="100%" src={cardGirlBoy} />
                        </div>
                        <div className="custom-card">
                            <h3>Europe Street beat</h3>
                            <div className="line-our-classes"></div>
                            <p>
                                If you run a fitness gym, this is one slogan that can bring
                                customers in. No one likes having to drive miles out of their way to
                                go to the gym.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Cards;
