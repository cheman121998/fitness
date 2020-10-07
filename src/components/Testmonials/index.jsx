import React from 'react';
import './style.scss';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataTest1, dataTest2 } from '../../api/Data';

const Slider1 = ({ description }) => <div className="item">{description}</div>;
const Slider2 = ({ src, nameUser, work, alt }) => (
    <div className="item">
        <img src={src} alt={alt} />
        <h4>{nameUser}</h4>
        <h6>{work}</h6>
    </div>
);
class Testmonials extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        const settings2 = {
            dots: true,
            infinite: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <div className="testmonials content">
                <div className="container">
                    <div className="test-intro title">
                        <h2>Testmonials</h2>
                        <div className="line"></div>

                        <Slider className="slider-quote" {...settings}>
                            {console.log('Data quote', dataTest1)}
                            {dataTest1.map((e, i) => (
                                <Slider1 key={i} description={e.description} />
                            ))}
                        </Slider>

                        <Slider className="user" {...settings2}>
                            {dataTest2.map((e, i) => (
                                <Slider2
                                    key={i}
                                    alt={e.alt}
                                    work={e.work}
                                    nameUser={e.name}
                                    src={e.image}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
export default Testmonials;
