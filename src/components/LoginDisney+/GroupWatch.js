import React from "react";
import styled from 'styled-components';

const GroupWatch = () => {
    return (
        <Section>
            <Container>
                <Content>
                    <h1 className="disney-titles">Como faço um GroupWatch?</h1>
                    <li>Acesse DisneyPlus.com ou abra o aplicativo móvel do Disney+</li>
                    <li>Pesquise o título para o qual você quer criar um GroupWatch</li>
                    <li>Selecione o ícone do GroupWatch na página Detalhes para iniciar o GroupWatch</li>
                    <li>Selecione Convidar na sala do GroupWatch para gerar um link de convite</li>
                    <li>Copie o link de convite ou selecione outra forma de compartilhamento: WhatsApp.</li>
                </Content>
            </Container>
        </Section>
    );
}

const Section = styled.section`
    background: url("/images/Soul_Groupwatch.jpg")center/cover no-repeat;
    height: 83vh;

    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (min-width: 768px) and (max-width: 1200px) {
        height: 61vh;
    }
    @media screen and (min-width: 280px) and (max-width: 767px) {
        height: 55vh;
        object-fit: contain;
        object-position: center;
    }
`;
const Container = styled.div`
    width: 91%;
    margin: 0 auto;

    @media screen and (min-width: 280px) and (max-width: 991px) {
        width: 85%;
    }
`;
const Content = styled.div`
    margin-top: 17vh;

    @media screen and (min-width: 280px) and (max-width: 1200px) {
            margin-top: 13vh;
        }

    li {
        font-size: 1rem;
        font-weight: 300;
        color: silver;

        @media screen and (min-width: 280px) and (max-width: 375px) {
            font-size: 0.75rem;
        }
    }
`;

export default GroupWatch;