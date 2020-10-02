import React from 'react';
import './style.scss';
import Cards from './Cards';
import Content from './Content';
import Advanced from './AdvancedGymnastic';

const ran = (max) => Math.floor(Math.random() * Math.floor(max));
class OurClasses extends React.Component {
    state = {
        listCards: [],
    };
    randomCard = () => {
        const { respond } = this.state;
        let number = ran(respond.length);
        let newArray = [];

        for (let i = number; i < number + 3; i++) {
            newArray.push(respond[i]);
        }
        for (let i = number; i < number + 3; i++) {
            newArray.slice(3);
        }
        this.setState({ listCards: newArray });
    };
    render() {
        return (
            <div className="our-classes">
                <Content />
                <Advanced />
                <Cards />
            </div>
        );
    }
}
export default OurClasses;
