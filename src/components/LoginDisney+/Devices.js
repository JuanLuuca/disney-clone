import React from "react";
import styled from 'styled-components';

const Devices = () => {
    return (
        <>
            <Section>
                <Container>
                    <Title>
                        <h1 className="disney-titles">Assista na plataforma que quiser</h1>
                    </Title>
                    <ImgGrid>
                        <Image>
                            <div className="leftside">
                                <img src="/images/Laptop.png" alt="LAPTOP" />
                                <img src="/images/TV.png" alt="TV" />
                                <img src="/images/mobile.png" alt="MOBILE" />
                                <img src="/images/XBOX.png" alt="XBOX" />
                            </div>
                            <div className="Description">
                                <h2>Laptop</h2>
                                <h2>TV</h2>
                                <h2 className="moreright">Mobile</h2>
                                <h2>XBOX</h2>
                            </div>
                        </Image>
                    </ImgGrid>
                </Container>
            </Section>
        </>
    );
};

const Section = styled.div`
    padding: 3vh 0 0vh 0;
    position: relative;
`;
const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`;
const Title = styled.div`
    text-align: center;
    margin: 0 0 4vh 0;
`;
const ImgGrid = styled.div`
    display: flex;

    @media screen and (min-width: 280px) and (max-width: 767px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;
const Image = styled.div`
    width: 100%;
    padding: 0 0 0 0;
    text-align: center;
    border-radius: 4px;
    
    @media screen and (min-width: 768px) and (max-width: 991px) {
        width: 100%;
    }

    .leftside {
        display: flex;
        align-items: center;
        text-align: center;
        

        img {
            width: 100%;
            height: 115px;
            object-fit: contain;

            @media screen and (min-width: 768px) and (max-width: 991px) {
                height: 85%;
            }
            @media screen and (min-width: 550px) and (max-width: 767px) {
                height: 75%;
            }
            @media screen and (min-width: 280px) and (max-width: 550px) {
                height: 55%;
            }
        }
    }
    .Description {
        display: flex;
        justify-content: space-between;
        padding: 0 200px;
 
        h2 {
            font-weight: 500 !important;
            margin-right: 0px;
            padding: 0 0px;

            @media screen and (min-width: 280px) and (max-width: 550px) {
                font-size: 0.9rem;
            }
        }
        .moreright {
                margin-left: 20px;
            }
    }
    
`;

export default Devices;