import React from "react";
import styled from 'styled-components';

const MarvelStudio = () => {
    return (
        <Section>
            <Container>
                <Content>
                    <h1 className="disney-titles">Originais Disney+ exclusivos</h1>
                    <p>Só no Disney+ você vê os melhores filmes, séries, curtas e outros conteúdos inéditos.</p>
                </Content>
            </Container>
        </Section>
    );
}

const Section = styled.section`
    background: url("/images/BlackPanther.jpg")center/cover no-repeat;
    height: 78vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 768px) and (max-width: 1200px) {
        height: 61vh;
    }
    @media screen and (min-width: 280px) and (max-width: 767px) {
        height: 55vh;
    }
`;
const Container = styled.div`
    width: 91%;
    margin: 0 auto;

    display: flex;
    text-align: end;
    flex-direction: column;

    @media screen and (min-width: 280px) and (max-width: 991px) {
        width: 85%;
    }
`;
const Content = styled.div`
    margin-top: 17vh;

    @media screen and (min-width: 280px) and (max-width: 1200px) {
        margin-top: 13vh;
    }
`;

export default MarvelStudio;