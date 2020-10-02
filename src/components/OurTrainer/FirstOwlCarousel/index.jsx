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
export default class FirstOwlCarousel extends React.Component {
    render() {
        return (
            <div className="first-owl-carousel">
                <OwlCarousel items={3} className="owl-theme" loop nav margin={10}>
                    <Router>
                        <div>
                            <Link to="/">
                                <img
                                    className="img"
                                    alt="img-youtube"
                                    src={slideTrainerWomanLift}
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to="/hourse">
                                <img className="img" alt="img-youtube" src={slideTrainerManPower} />
                            </Link>
                        </div>
                        <div>
                            <Link to="/cat">
                                <img
                                    className="img"
                                    alt="img-youtube"
                                    src={slideTrainerWomanSexy}
                                />
                            </Link>
                        </div>

                        <div>
                            <Link to="/house">
                                <img
                                    className="img"
                                    alt="img-youtube"
                                    src={slideTrainerWomanLift}
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to="/sweet">
                                <img
                                    className="img"
                                    alt="img-youtube"
                                    src={slideTrainerWomanSexy}
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to="/home">
                                <img className="img" alt="img-youtube" src={slideTrainerManPower} />
                            </Link>
                        </div>
                    </Router>
                </OwlCarousel>
            </div>
        );
    }
}
