import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './style.scss';

import { dataSlider1Trainer } from '../../../api/Data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ListLink = ({ to, alt, src }) => (
    <div>
        <Link to={to}>
            {console.log('image', src)}
            <img className="img" alt={alt} src={src} />
        </Link>
    </div>
);
export default class FirstOwlCarousel extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div className="first-trainer">
                <Slider className="slider-trainer1" {...settings}>
                    {dataSlider1Trainer.slice(0, 3).map((e, i) => (
                        <ListLink key={i} to={e.to} alt={e.alt} src={e.image} />
                    ))}
                </Slider>
            </div>
        );
    }
}
