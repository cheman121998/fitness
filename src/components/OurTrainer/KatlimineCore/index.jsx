import React from 'react';
import './style.scss';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { TwitterOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
class KatlimineCore extends React.Component {
    render() {
        return (
            <div className="katlimineCore">
                <div className="container">
                    <h3>Katlimine Core</h3>
                    <h6>Fitness Instractor</h6>
                    <div className="line"></div>
                    <p>
                        Your body hears everything that your mind says. You have to have a positive
                        attitude if you want to achieve your goals.If you run a fitness gym, this is
                        one slogan that can bring customers in. No one likes having to drive miles
                        out of their way to go to the gym.
                    </p>
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
export default KatlimineCore;
