import React from 'react';
import './style.scss';
import { Button, Tooltip } from 'antd';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import {
    YoutubeOutlined,
    GlobalOutlined,
    TwitterOutlined,
    FacebookOutlined,
    InstagramOutlined,
} from '@ant-design/icons';
import Header from '../Header';

class DontStop extends React.Component {
    render() {
        return (
            <div id="dont-stop">
                <Header />

                <div className="dont-stop">
                    <div className="group-icon">
                        <Router>
                            <ul>
                                <li>
                                    <Link to="./global">
                                        <GlobalOutlined />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="./facebook">
                                        <FacebookOutlined />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="./global">
                                        <TwitterOutlined />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="./global">
                                        <InstagramOutlined />
                                    </Link>
                                </li>
                            </ul>
                        </Router>
                    </div>
                    <div>
                        <div className="intro-dont-stop">
                            <h1>Don't Stop Till You Drop</h1>
                            <p>
                                The best way to <span>make sure your body and mind </span>are ready
                                for work is to wake them up with a good workout.
                            </p>
                            <div className="btn-group">
                                <Tooltip
                                    trigger="click"
                                    placement="topLeft"
                                    title="GET STARTED NOW"
                                    arrowPointAtCenter
                                >
                                    <Button className="btn-get-started">GET STARTED NOW</Button>
                                </Tooltip>
                                <div className="youtube">
                                    <span>
                                        <Tooltip
                                            placement="topLeft"
                                            title="You Tube"
                                            trigger="click"
                                        >
                                            <YoutubeOutlined className="btn-youtube" />
                                        </Tooltip>
                                    </span>
                                    <span className="txt-watch">WATCH REVIEWS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DontStop;
