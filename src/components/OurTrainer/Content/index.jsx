import React from 'react';
import './style.scss';
class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <h2>Our Trainer</h2>
                    <div className="line"></div>
                    <p>
                        If you run a fitness gym, this is one slogan that can bring customers in. No
                        one likes having to drive miles out of their way to go to the gym. It is
                        always easier to have a gym that is actually close to home. Your body hears
                        everything that your mind says.
                    </p>
                </div>
            </div>
        );
    }
}
export default Content;
