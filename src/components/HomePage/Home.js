import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import db from "../../fireBase";
import { setDisneyMovies } from "../Redux/Reducers/MovieReducer";
import Banner from "./Banner";
import Brand from "./Brand";
import DisneyKid from "./DisneyKid";
import Hollywood from "./Hollywood";
import NewtoDisney from "./NewtoDisney";
import Original from "./Original";
import Popular from "./Popular";
import Trending from "./Trending";

const Home = () => {
    const dispatch = useDispatch();

    let populars = [];
    let hollywoods = [];
    let newTos = [];
    let kidsTvs = [];
    let originals = [];
    let trending = [];


    useEffect(() => {
        db.collection("Movies").onSnapshot((snapshot) => {

            snapshot.docs.map((doc) => {

                switch (doc.data().type) {
                    case "popular":
                        populars = [...populars, {id: doc.id, ...doc.data()}];
                        break;
                    case "hollywood":
                        hollywoods = [...hollywoods, {id: doc.id, ...doc.data()}];
                        break;
                    case "newTo":
                        newTos = [...newTos, {id: doc.id, ...doc.data()}];
                        break;
                    case "kidsTv":
                        kidsTvs = [...kidsTvs, {id: doc.id, ...doc.data()}];
                        break;
                    case "original":
                        originals = [...originals, {id: doc.id, ...doc.data()}];
                        break;
                    case "trending":
                        trending = [...trending, {id: doc.id, ...doc.data()}];
                        break;
                    default:
                        break;
                }
            });

            dispatch(setDisneyMovies({
                popular: populars,
                hollywood: hollywoods,
                newTo: newTos,
                kidsTv: kidsTvs,
                original: originals,
                trending: trending
            }))

        });

    }, []);

    return (
        <>
            <Container>
                <Banner />
                <Brand />
                <Original />
                <NewtoDisney />
                <Trending />
                <Hollywood />
                <DisneyKid />
                <Popular />
            </Container>
        </>
    );
}

const Container = styled.main`
    position: relative;
    height: calc(100% -50px);
    padding: 0 calc(3.5vw + 50px);
    display: block;
    overflow: hidden;
    background: url('/images/disney-background.webp') center/cover no-repeat;
`;

export default Home;