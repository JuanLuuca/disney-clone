import React from "react";
import styled from 'styled-components';

const GridTheme = () => {
    return (
        <Section>
            <Container>
                <Title>
                    <h1 className="disney-titles">Series e Filmes Exclusivos no Disney+</h1>
                    <p>Novas Historias de uma Incrivel Familia</p>
                </Title>
                <GridImg>
                    <Image><img src="/images/Disney_MLP_GridItem_TS4_AUNZ.jpg" alt="" /></Image>
                    <Image><img src="/images/ForkyAsksAQuestion_en-US.jpg" alt="" /></Image>
                    <Image><img src="/images/moana-poster-4-2.png" alt="" /></Image>
                    <Image><img src="/images/Poster_InfinityWar_EN.jpg" alt="" /></Image>
                    <Image><img src="/images/Disney_MLP_Griditem_SWRiseofSkyWalker.jpg" alt="" /></Image>
                    <Image><img src="/images/Soul_EN_(1).png" alt="" /></Image>
                    <Image><img src="/images/LUCA-2.png" alt="" /></Image>
                    <Image><img src="/images/SW_Clone_Wars.png" alt="" /></Image>
                    <Image><img src="/images/Mickey_Mouse_Clubhouse_Grid_Item_052820.jpg" alt="" /></Image>
                </GridImg>
                <GetBundleBtn><button type="button" className="btn-theme-disney">Tenha Disney+</button></GetBundleBtn>
            </Container>
        </Section>
    )
};

const Section = styled.section`
    padding: 5vh 0;
    position: relative;
`;
const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`;
const Title = styled.div`
    text-align: center;
    margin-bottom: 3vh;
    p {
        font-size: 1rem;
        @media screen and (max-width: 550px) {
            font-size: .8rem;
        }
    }
`;
const GridImg = styled.div`
    display: grid;
    gap: 15px 25px;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(2, minmax(9, 1fr));
    }
`;
const Image = styled.div`
    width: 100%;
    padding: 0;
    border-radius: 0.245rem;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 75%) 0px 16px 10px -10px;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 0.245rem;;
    }
`;
const GetBundleBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1vh 0;
    
    button {
        cursor: pointer;
    }
`;

export default GridTheme;