import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './style.scss';
import {
    slideTrainerWomanLift,
    slideTrainerManPower,
    slideTrainerWomanSexy,
} from '../../../assets/images';
import { dataCardClasses, dataSlider1Trainer } from '../../../api/Data';

const ListLink = ({ to, alt, image }) => (
    <div>
        <Link to={to}>
            <img className="img" alt={alt} src={image} />
        </Link>
    </div>
);
export default class FirstOwlCarousel extends React.Component {
    render() {
        return (
            <div className="first-owl-carousel">
                <OwlCarousel items={3} className="owl-theme" loop nav margin={10}>
                    <Router>
                        {dataSlider1Trainer.slice(0, 3).map((e, i) => (
                            <ListLink key={i} to={e.to} alt={e.alt} src={e.src} />
                        ))}
                    </Router>
                </OwlCarousel>
            </div>
        );
    }
}
