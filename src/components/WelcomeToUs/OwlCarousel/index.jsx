import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';
import { dataSliderYoutube } from '../../../api/Data';

const ListLink = ({ src, to, alt }) => (
    <div>
        <Link to={to}>
            {console.log('Image Youtube', src)}
            <img src={src} alt={alt} />
        </Link>
    </div>
);
export default class ShowOwlCarousel extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <div className="welcome-carousel">
                <div className="container-fluid">
                    <Slider className="welcome-youtube" {...settings}>
                        {dataSliderYoutube.slice(0, 3).map((e, i) => (
                            <ListLink key={i} to={e.to} alt={e.alt} src={e.image} />
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
