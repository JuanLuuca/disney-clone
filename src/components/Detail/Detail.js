import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from 'styled-components';
import db from "../../fireBase";

const Detail = () => {

    const { id } = useParams();
    const [State, setState] = useState();

    useEffect(() => {
        db.collection("Movies").doc(id).get().then((doc) => {
            if(doc.exists) {
                setState(doc.data());
            } else {
                console.log("detalhes não estao em fetch");
            }
        })
    }, [id])

    return (
        <>

            {
                State && (
                    <>
                        <Background style={{background: `radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41)), url(${State.BackgroundImg})`,
                            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                        }}>
                            <Container>
                                <Content>
                                    <ImageTitle>
                                        <img src={State.TitleImg} alt="" />
                                    </ImageTitle>
                                    <h1>{State.Genres}</h1>
                                    <ButtonDiv>
                                        <button>
                                            <img src="/images/play-icon-black.png" />
                                            ASSISTIR
                                        </button>
                                        <button className="button-two">Trailer</button>
                                        <IconeDiv>
                                            <span id="horizontal"></span>
                                            <span id="vertical"></span>
                                        </IconeDiv>
                                        <GroupIcone>
                                            <GroupDivTwo>
                                                <GroupDivThree>
                                                    <img src="/images/group-icon.png" />
                                                </GroupDivThree>
                                            </GroupDivTwo>
                                        </GroupIcone>
                                    </ButtonDiv>
                                    <p>{State.Description}</p>
                                </Content>
                            </Container>
                        </Background>
                                </>
                            )    
                        }
        </>
    );
};

const Background = styled.main`


    @media screen and (min-width: 991px) and (max-width: 1200px) {
        min-height: 72vh;
    }
    @media screen and (min-width: 550px) and (max-width: 991px) {
        min-height: 65vh;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
        min-height: 55vh;
        object-fit: fill;
    }
`;
const Container = styled.div`
    width: 95%;
    height: auto;
    margin: 0 auto;
`;
const Content = styled.div`
    display: flex;
    min-height: 95vh;
    overflow: hidden;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    position: relative;
    
    @media screen and (min-width: 991px) and (max-width: 1200px) {
        min-height: 72vh;
    }
    @media screen and (min-width: 550px) and (max-width: 991px) {
        min-height: 65vh;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
        min-height: 55vh;
        object-fit: fill;
    }

    h1 {
        color: #fff;
        font-size: 1.2rem;
        font-weight: 500 !important;

        @media screen and (min-width: 550px) and (max-width: 1200px) {
            font-size: 1rem;
        }
        @media screen and (min-width: 375px) and (max-width: 767px) {
            font-size: 0.75rem;
        }
        @media screen and (min-width: 280px) and (max-width: 375px) {
            font-size: 0.7rem;
            max-width: 250px;
        }
    }
    p {
        line-height: 1.6;
        font-size: 20px;
        margin: 0;
        padding-bottom: 1rem;
        padding-top: 1rem;
        color: #f9f9f9;
        max-width: 800px;

        @media screen and (min-width: 550px) and (max-width: 1200px) {
            font-size: 1rem;
            max-width: 550px;
        }
        @media screen and (min-width: 375px) and (max-width: 767px) {
            font-size: 0.75rem;
            padding: 0.5rem 0;
            max-width: 400px;
        }
        @media screen and (min-width: 280px) and (max-width: 375px) {
            font-size: 0.75rem;
            padding: 0.3rem 0;
            max-width: 400px;
        }
    }
`;
const ImageTitle = styled.div`
    width: 100%;
    max-width: 450px;

    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
        max-width: 325px;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
        max-width: 250px;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
        max-width: 150px;
    }

    img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
`;
const ButtonDiv = styled.div`
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-flow: row wrap;
    margin: calc(28px) -8px -4px;
    min-height: 56px;

    img {
        margin-right: 10px;

        @media screen and (min-width: 375px) and (max-width: 550px) {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-left: 10px;
        }
    }
    button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: arial, sans-serif;
        font-size: 15px;
        font-weight: 550;
        letter-spacing: 1.5px;
        line-height: 1.06;
        outline: none;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        height: 60px;
        width: auto;
        margin: 0.25rem 0.75rem;
        margin-bottom: 10px;
        padding: 0 27px;
        background: #f9f9f9;
        border: none;
        color: #090b13;
        transition: all .2s ease-in-out;
        border-radius: 0.25rem;

        @media screen and (min-width: 550px) and (max-width: 1200px) {
        width: 200px;
        height: 50px;
        }
        @media screen and (min-width: 375px) and (max-width: 550px) {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            flex-direction: column;
            height: 60px;
            width: 100px;
        }
        @media screen and (min-width: 280px) and (max-width: 375px) {
            width: 10px;
            height: 10px;
        }

        &:hover {
            background: #a9a9a9;
        }
    }
    .button-two {
        background: rgba(0, 0, 0, .3);
        border: 1px solid #f9f9f9;
        color: #f9f9f9;

        @media screen and (min-width: 550px) and (max-width: 1200px) {
            width: 100px;
            height: 40px;
        }
        @media screen and (min-width: 375px) and (max-width: 550px) {
            display: flex;
            flex-direction: column;
            height: 50px;
            width: 100px;
        }
        @media screen and (min-width: 280px) and (max-width: 375px) {
            width: 10px;
            height: 10px;
        }

        &:hover {
            color: blACK;
            background: #a9a9a9;
            border: 1px solid #a9a9a9;
        }
    }
`;
const IconeDiv = styled.div`
    height: 44px;
    width: 44px;
    margin-left: 11px;
    margin-bottom: 5px;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 100%;
    border: 2px solid white;
    cursor: pointer;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    transition: all 0.2s ease-out 0s;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
        width: 36px;
        height: 36px;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
        width: 22px;
        height: 22px;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
        width: 10px;
        height: 10px;
    }

    &:hover {
        background-color: rgb(249, 249, 249);
    }
    
    &:hover span {
        background-color: rgb(0, 0, 0);
    }
    
    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
        transition: all 0.2s ease-out 0s;
    }
    #horizontal {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
    }
    #vertical {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
    }
`;
const GroupIcone = styled.div`
    display: block;
    margin-left: 15px;
`;
const GroupDivTwo = styled.div`
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    float: left;
    
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 1;
    margin-bottom: 5px;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
        width: 36px;
        height: 36px;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
        width: 22px;
        height: 22px;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
        width: 10px;
        height: 10px;
    }
`;
const GroupDivThree = styled.div`
    background: rgb(0, 0, 0, 0.6);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 300ms ease 0s;
    border: 2px solid white;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
        width: 36px;
        height: 36px;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
        width: 22px;
        height: 22px;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
        width: 10px;
        height: 10px;
    }

    &:hover {
        background-color: rgb(249, 249, 249);
    }

    &:hover img {
        border-radius: 100%;
        background-color: rgb(0, 0, 0);
        
    }
    

    img {
        width: 100%;
        margin-left: 10px;
    }
`;

export default Detail;