import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './style.scss';
import {
    slideTrainerManLift,
    slideTrainerTwoWomen,
    slideTrainerWomanPullRope,
    slideTrainerWomanBoxer,
    slideTrainerManFitness,
} from '../../../assets/images';
export default class SecondOwlCarousel extends React.Component {
    render() {
        return (
            <div className="second-owl-carousel">
                <OwlCarousel items={5} className="owl-theme" loop nav margin={0}>
                    <Router>
                        <div>
                            <Link to="/">
                                <img className="img" alt="img-youtube" src={slideTrainerManLift} />
                            </Link>
                        </div>
                        <div>
                            <Link to="/hourse">
                                <img
                                    className="img"
                                    alt="img-youtube"
                                    src={slideTrainerManFitness}
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to="/cat">
                                <img className="img" alt="img-youtube" src={slideTrainerTwoWomen} />
                            </Link>
                        </div>

                        <div>
                            <Link to="/house">
                                <img
                                    className="img"
                                    alt="img-youtube"
                                    src={slideTrainerWomanPullRope}
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to="/sweet">
                                <img
                                    className="img"
                                    alt="img-youtube"
                                    src={slideTrainerWomanBoxer}
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to="/home">
                                <img
                                    className="img"
                                    alt="img-youtube"
                                    src={slideTrainerWomanPullRope}
                                />
                            </Link>
                        </div>
                    </Router>
                </OwlCarousel>
            </div>
        );
    }
}
