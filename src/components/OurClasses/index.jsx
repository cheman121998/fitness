import React from 'react';
import './style.scss';
import Cards from './Cards';
import Content from './Content';

class OurClasses extends React.Component {
    render() {
        return (
            <div className="our-classes">
                <Content />
                <Cards />
            </div>
        );
    }
}
export default OurClasses;
