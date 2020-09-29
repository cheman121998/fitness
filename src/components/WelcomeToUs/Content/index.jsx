import React from 'react';
import './style.scss';
import { Button, Tooltip } from 'antd';
class Content extends React.Component {
    render() {
        return (
            <div className="content welcome-content">
                <div className="txt-about">ABOUT</div>
                <h2>Welcome to Us</h2>
                <div className="line"></div>
                <div>
                    <p>
                        Your body hears everything that your mind says. You have to have a positive
                        attitude if you want to achieve your goals.
                    </p>
                    <p>
                        If you run a fitness gym, this is one slogan that can bring customers in. No
                        one likes having to drive miles out of their way to go to the gym. It is
                        always easier to have a gym that is actually close to home. Your body hears
                        everything that your mind says. You have to have a positive attitude if you
                        want to achieve your goals.
                        <Tooltip trigger="click">
                            <Button>READ MORE</Button>
                        </Tooltip>
                    </p>
                </div>
            </div>
        );
    }
}
export default Content;
