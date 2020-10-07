import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './style.scss';

import { dataSlider1Trainer } from '../../../api/Data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const getItems = document.getElementsByClassName('slick-active');
// console.log('Items are working', getItems);
// for (let getItem of getItems) {
//     console.log('Get item', getItem);
// }
// for (var i = 0; i < getItems.length; i++) {
//     console.log('Get item nầy', getItems[i].id); m để ở đây thì hắn log trước khi render => thì ko có sider
// đó là t nói sản rứa chơ hỏi a ơ :v

// }

const ListLink = ({ to, alt, src }) => (
    <div>
        <Link to={to}>
            {console.log('image', src)}
            <img className="img" alt={alt} src={src} />
        </Link>
    </div>
);
export default class FirstOwlCarousel extends React.Component {
    state = {
        slideIndex: 0,
        updateCount: 0,
    };
    componentDidMount() {
        const getItems = document.getElementsByClassName('slick-active');
        console.log('getItem', getItems);
        // for (let i = 0; i < getItems.length; i++) {
        //     console.log('=========First========', getItems[i]);
        // }
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
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
            afterChange: () => this.setState((state) => ({ updateCount: state.updateCount + 1 })),
            beforeChange: (current, next) => this.setState({ slideIndex: next }),
        };
        return (
            <div className="first-trainer">
                <Slider className="slider-trainer1" {...settings}>
                    {dataSlider1Trainer.map((e, i) => (
                        <ListLink key={i} to={e.to} alt={e.alt} src={e.image} />
                    ))}
                </Slider>
            </div>
        );
    }
}
