import React from 'react';
import styled from 'styled-components';

const Adverstise = () => {
    return (
        <>
            <Section>
                <Container>
                    <ImgInfo>
                        <img src="/images/cta-logo-one (1).png" alt="logo"/>
                    </ImgInfo>
                    <TextInfo>
                        <p>obtenha o pacote disney para transmitir os melhores filmes, programas e esportes com Disney+, hulu e ESPN+, termo aplicável</p>
                        <button type="button" className="btn-theme-disney">Pegue este pacote</button>
                    </TextInfo>
                </Container>
            </Section>
        </>
    )
};

const Section = styled.section`
    position: relative;
    padding: 35px 5%;
    background: transparent;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #f9f9f9;
    padding: 35px 5%;

    @media screen and (max-width: 991px) {
        flex-direction: column;
        padding: 25px 35px;
        justify-content: center;
        text-align: center;
    }
    @media screen and (max-width: 767px) {
        padding: 25px 15px;
        text-align: center;
    }
`;
const ImgInfo = styled.div`
    width: 48%;
    flex: 0 auto;
    opacity: 1;
    z-index: 1500;

    @media screen and (max-width: 767px) {
        width: 100%;
    }

    img {
        width: 100%;
        max-width: 600px;
        height: auto;
        object-fit: contain;
        object-position: center;
    }
`;
const TextInfo = styled.div`
    width: 48%;
    flex: 0 auto;
    opacity: 1;
    z-index: 1500;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
    p {
        font-size: 1rem;

        @media screen and (max-width: 550px) {
            font-size: 95rem;
        }
    }

    button {
        cursor: pointer;
    }
`;

export default Adverstise;