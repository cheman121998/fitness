import React from 'react';
import './style.scss';
import { Tooltip, Button } from 'antd';
class Advanced extends React.Component {
    render() {
        return (
            <div className="advanced">
                <div className="container">
                    <h2>Advanced Gymnastic</h2>
                    <div className="line"></div>
                    <p>
                        If you run a fitness gym, this is one slogan that can bring customers in. No
                        one likes having to drive miles out of their way to go to the gym.
                    </p>
                    <Tooltip trigger="click">
                        <Button>READ MORE</Button>
                    </Tooltip>
                </div>
            </div>
        );
    }
}
export default Advanced;
