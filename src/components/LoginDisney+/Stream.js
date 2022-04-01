import React from "react";
import styled from 'styled-components';

const Stream = () => {
    return (
        <Section>
            <Container>
                <TextInfo>
                    <h1 className="disney-titles">Assista do seu jeito</h1>
                    <p>Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer. Além disso, para a felicidade de todos, é possível assistir em até 4 telas ao mesmo tempo.</p>
                    <button type="button" className="btn-theme-disney">Assine Agora</button>
                </TextInfo>
                <ImgInfo>
                    <img src="/images/jugle.jpg" alt="img/stream" />
                </ImgInfo>
            </Container>
        </Section>
    );
};

const Section = styled.section`
    padding: 50px 5%;
    position: relative;
    background: transparent;

    @media screen and (max-width: 991px) {
        padding: 35px 50px;
    }
    @media screen and (max-width: 767px) {
        padding: 25px;
    }
`;
const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 991px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;
const TextInfo = styled.section`
    width: 48%;
    flex: 0 auto;
    opacity: 1;
    z-index: 1500;
    position: relative;

    @media screen and (max-width: 991px) {
        width: 100%;
        padding: 0;
    }

    p {
        font-size: 20px;
        line-height: 30px;
        font-weight: 100;
        color: silver;

        @media screen and (min-width: 375px) and (max-width: 550px) {
            font-size: 0.85rem;
            line-height: 1rem;
        }
        @media screen and (min-width: 280px) and (max-width: 375px) {
            font-size: 0.7rem;
            line-height: 1rem;
            margin-top: 1vh;
        }
    }

    button {
        cursor: pointer;
    }
`;
const ImgInfo = styled.section`
    width: 48%;
    flex: 0 auto;
    opacity: 1;
    z-index: 1500;
    position: relative;

    @media screen and (max-width: 991px) {
        width: 100%;
        padding: 0;
    }

    img {
        width: 100%;
        max-width: 600px;
        height: auto;

        @media screen and (min-width: 500px) and (max-width: 1200px) {
            height: auto;
            width: 100%;
            object-fit: contain;
        }
        @media screen and (min-width: 280px) and (max-width: 500px) {
            height: 31vh;
            width: 100%;
            object-fit: contain;
        }
    }
`;

export default Stream;