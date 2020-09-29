import React, { Component } from 'react';
import { Player, LoadingSpinner } from 'video-react';
import ShowOwlCarousel from '../OwlCarousel';
import './style.scss';
// import { Carousel, Row, Col } from 'antd';
// import {
//     cardWelcomeSexyWoman,
//     cardWelcomeWomanLift,
//     cardWelcomeWomanStanding,
//     youtubeWomanCoach,
//     youtubeWomanExcerciseDumbell,
//     youtubeWomanYoga,
// } from '../../../assets/images';

export default class Video extends Component {
    render() {
        return (
            <div>
                <Player src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4">
                    <LoadingSpinner />
                </Player>
                <ShowOwlCarousel />
            </div>
        );
    }
}
