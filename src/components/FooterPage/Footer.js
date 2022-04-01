import React from "react";
import styled from 'styled-components';

const Footer = () => {
    return (
        <>
            <Section>
                <Container>
                    <FooterBrand>
                        <img src="/images/logo.svg" alt="logo" />
                    </FooterBrand>
                    <Nav>
                        <li><p>Português</p></li>
                        <li><p>Termos e Condiçoes de Uso</p></li>
                        <li><p>Política e privacidade</p></li>
                        <li><p>Proteção de Dados</p></li>
                        <li><p>Anúncios personalizados</p></li>
                        <li><p>Dispositivos Compatíveis</p></li>
                        <li><p>Ajuda</p></li>
                    </Nav>
                    <Copyright>
                        <p>® 2022 Disney, Disney+ e The Walt Disney Company. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito a disponibilidade.</p>
                    </Copyright>
                </Container>
            </Section>
        </>
    );
};

const Section = styled.section`
    margin-top: 54px;
    padding: 2rem 0;
    margin-bottom: 0;

    @media screen and (max-width: 550px) {
        padding: 1rem 0;
    }
`;
const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`;
const FooterBrand = styled.div`
    text-align: center;

    img {
        width: 10rem;
        height: auto;
        object-fit: fill;

        @media screen and (max-width: 550px) {
            width: 7rem;
        }
    }
`;
const Nav = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    flex-shrink: 0;
    flex-grow: initial;
    justify-content: center;

    li {
        list-style: none;

        p {
            padding: 0.5rem;
            font-size: 0.9rem;
            margin-right: 0.3rem;

            @media screen and (max-width: 550px) {
                font-size: 0.75rem;
                padding: 0.1rem;
            }
        }
    }
`;
const Copyright = styled.div`
    text-align: center;

    p {
        font-weight: 400 !important;

        @media screen and (max-width: 550px) {
            font-size: 0.95rem;
        }
    }
`;

export default Footer;