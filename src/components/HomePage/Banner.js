import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4} },
            { breakpoint: 991, settings: { slidesToShow: 3} },
            { breakpoint: 767, settings: { slidesToShow: 2} },
            { breakpoint: 425, settings: { slidesToShow: 1} },
        ]
    };

    return (
        <>
            <CarsouselImgs {...settings}>
                <Wrap>
                    <div>
                        <img src="/images/slide1.jpg" alt="slide/image" />
                    </div>
                </Wrap>
                <Wrap>
                    <div>
                        <img src="/images/slider-scale.jpg" alt="slide/image" />
                    </div>
                </Wrap>
                <Wrap>
                    <div>
                        <img src="/images/slide3.jpg" alt="slide/image" />
                    </div>
                </Wrap>
                <Wrap>
                    <div>
                        <img src="/images/slide4.jpg" alt="slide/image" />
                    </div>
                </Wrap>
                <Wrap>
                    <div>
                        <img src="/images/slide5.jpg" alt="slide/image" />
                    </div>
                </Wrap>
                <Wrap>
                    <div>
                        <img src="/images/slide6.jpg" alt="slide/image" />
                    </div>
                </Wrap>
                <Wrap>
                    <div>
                        <img src="/images/slide7.jpg" alt="slide/image" />
                    </div>
                </Wrap>
            </CarsouselImgs>
        </>
    );
    
};

const CarsouselImgs = styled(Slider)`
    ul li button {
        &::before {
            font-size: 11px;
            color: rgb(150, 158, 171);
        }
    }
    ul li.slick-active button {
        &::before {
            color: #fff !important;
        }
    }
    & > button {
        opacity: 0;
        z-index: 0;
        width: 5vw;
        height: 100%;

        &:hover {
            opacity: 1;
            z-index: 2000;
            transition: opacity 0.2s ease 0s;
        }
    }
    .slick-prev {
        left: -75px
    }
    .slick-next {
        right: -75px;
    }
    .slick-list {
        overflow: initial !important;
    }
`;
const Wrap = styled.div`
    position: relative;

    div {
        border-radius: 4px;
        padding: 4px;
        display: block;
        opacity: 1;
        z-index: 2000;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: default;
        object-position: center;
    }
    img {
        
        width: 100%;
        height: 500px;
        object-fit: cover;
        border-radius: 4px;

        @media screen and (min-width: 375px) and (max-width: 550px) {
            width: 100%;
            height: 15vh;
            object-fit: fill;
        }
        @media screen and (min-width: 280px) and (max-width: 375px) {
            width: 100%;
            height: 17vh;
            object-fit: fill;
        }
    }
    &:hover {
        padding: 1px;
        border: 4px solid #fff;
        transition-duration: 300ms;
    }
`;

export default Banner;

