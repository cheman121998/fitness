import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './style.scss';
import { dataSlider2Trainer } from '../../../api/Data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ListLink = ({ to, src, alt }) => (
    <div>
        <Link to={to}>
            <img src={src} alt={alt} />
        </Link>
    </div>
);
export default class SecondOwlCarousel extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 5,
            slidesToScroll: 5,
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
            <div className="second-trainer">
                <Slider className="slide-trainer2" {...settings}>
                    {dataSlider2Trainer.map((e, i) => (
                        <ListLink key={i} to={e.to} alt={e.alt} src={e.image} />
                    ))}
                </Slider>
            </div>
        );
    }
}
