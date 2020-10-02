import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './style.scss';
import {
    slideYoutubeBoyGirl,
    slideYoutubeWomanDumbbell,
    slideYoutubeWomanYogaSmall,
} from '../../../assets/images';
export default class ShowOwlCarousel extends React.Component {
    render() {
        return (
            <div className="welcome-carousel">
                <div className="container-fluid">
                    <OwlCarousel
                        items={3}
                        className="owl-theme"
                        loop
                        nav
                        margin={8}
                        autoplay="true"
                        autoplayTimeout="2000"
                    >
                        <Router>
                            <div>
                                <Link to="/">
                                    <img
                                        className="img"
                                        alt="img-youtube"
                                        src={slideYoutubeBoyGirl}
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link to="/hourse">
                                    <img
                                        className="img"
                                        alt="img-youtube"
                                        src={slideYoutubeWomanDumbbell}
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link to="/cat">
                                    <img
                                        className="img"
                                        alt="img-youtube"
                                        src={slideYoutubeWomanYogaSmall}
                                    />
                                </Link>
                            </div>

                            <div>
                                <Link to="/house">
                                    <img
                                        className="img"
                                        alt="img-youtube"
                                        src={slideYoutubeWomanYogaSmall}
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link to="/sweet">
                                    <img
                                        className="img"
                                        alt="img-youtube"
                                        src={slideYoutubeWomanYogaSmall}
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link to="/home">
                                    <img
                                        className="img"
                                        alt="img-youtube"
                                        src={slideYoutubeBoyGirl}
                                    />
                                </Link>
                            </div>
                        </Router>
                    </OwlCarousel>
                </div>
            </div>
        );
    }
}
