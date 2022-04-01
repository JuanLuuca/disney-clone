import React from "react";
import styled from 'styled-components';

const Brand = () => {
    return (
        <>
            <Container>
                <Wrap>
                    <img src="/images/viewers-disney.png" alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                        <source src="/images/1564674844-disney.mp4" type="video/mp4"></source>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-pixar.png" alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                        <source src="/images/1564676714-pixar.mp4" type="video/mp4"></source>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-marvel.png" alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                        <source src="/images/1564676115-marvel.mp4" type="video/mp4"></source>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                        <source src="/images/1608229455-star-wars.mp4" type="video/mp4"></source>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png" alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                        <source src="/images/1564676296-national-geographic.mp4" type="video/mp4"></source>
                    </video>
                </Wrap>
            </Container>
        </>
    );
};

const Container = styled.div`
    margin-top: 31px;
    padding: 30px 0 26px;

    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media screen and (max-width: 768px) and (max-width: 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-gap: 15px;
        gap: 15px;
    }
    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 11px;
        gap: 11px;
    }
`;
const Wrap = styled.div`
    position: relative;
    padding-top: 56.25%;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25ms, 0.46, 0.45, 0.94) 0s;
    object-position: center;
    border: 4px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        z-index: 1;
        display: block;
        border-radius: 10px;
        transition: opacity 500ms ease-in-out 0s;
        position: absolute;
        top: 0;
    }

    video {        
        width: 100%;
        height: 100%;        
        opacity: 0;
        z-index: 0;
        position: absolute;
        top: 0px;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.9);

        video {
            opacity: 1;
        }
    }
`;

export default Brand;