import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './style.scss';
import {
    sliderManLift,
    sliderManExercise,
    sliderThreeWomen,
    sliderPullRope,
    sliderKetteleBell,
} from '../../../assets/images';
export default class SecondOwlCarousel extends React.Component {
    render() {
        return (
            <div className="second-owl-carousel">
                <OwlCarousel items={5} className="owl-theme" loop nav margin={0}>
                    <Router>
                        <div>
                            <Link to="/">
                                <img className="img" alt="img-youtube" src={sliderManLift} />
                            </Link>
                        </div>
                        <div>
                            <Link to="/hourse">
                                <img className="img" alt="img-youtube" src={sliderManExercise} />
                            </Link>
                        </div>
                        <div>
                            <Link to="/cat">
                                <img className="img" alt="img-youtube" src={sliderThreeWomen} />
                            </Link>
                        </div>

                        <div>
                            <Link to="/house">
                                <img className="img" alt="img-youtube" src={sliderPullRope} />
                            </Link>
                        </div>
                        <div>
                            <Link to="/sweet">
                                <img className="img" alt="img-youtube" src={sliderKetteleBell} />
                            </Link>
                        </div>
                        <div>
                            <Link to="/home">
                                <img className="img" alt="img-youtube" src={sliderPullRope} />
                            </Link>
                        </div>
                    </Router>
                </OwlCarousel>
            </div>
        );
    }
}
