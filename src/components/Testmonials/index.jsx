import React from 'react';
import './style.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { avt } from '../../assets/images';

class Testmonials extends React.Component {
    render() {
        return (
            <div className="testmonials content">
                <div className="container">
                    <div className="test-intro title">
                        <h2>Testmonials</h2>
                        <div className="line"></div>
                        <OwlCarousel
                            id="owl-theme1"
                            items={1}
                            className="owl-theme"
                            loop
                            margin={10}
                            nav
                        >
                            <div className="item">
                                <div>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero
                                </div>
                            </div>
                            <div className="item">
                                <div>Man Man</div>
                            </div>
                            <div className="item">
                                <div>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero
                                </div>
                            </div>
                            <div className="item">
                                <div>Man Man stronger</div>
                            </div>
                            <div className="item">
                                <div>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero
                                </div>
                            </div>
                        </OwlCarousel>
                        <OwlCarousel
                            id="owl-theme2"
                            items={1}
                            className="owl-theme2"
                            loop
                            margin={10}
                            nav
                        >
                            <div className="item">
                                <img src={avt} alt="avt" />
                                <h4>Ahmed Man</h4>
                                <h6>CLIENT</h6>
                            </div>
                            <div className="item">
                                <img src={avt} alt="avt" />
                                <h4>Ahmed Elsayed</h4>
                                <h6>USER</h6>
                            </div>
                            <div className="item">
                                <img src={avt} alt="avt" />
                                <h4>Ahmed Minh</h4>
                                <h6>ADMIN</h6>
                            </div>
                            <div className="item">
                                <img src={avt} alt="avt" />
                                <h4>Man Man</h4>
                                <h6>USER</h6>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        );
    }
}
export default Testmonials;
