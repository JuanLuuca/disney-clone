import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, provider } from '../../fireBase';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectUserName, selectUserPhoto, setLogOutState } from "../Redux/Reducers/UserReducer";
import { setLoginState } from "../Redux/Reducers/UserReducer";

const Header = () => {
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const [Toggler, setToggler] = useState(false);
    const [header, setHeader] = useState(false);
    const [close, setClose] = useState(true)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const CloseLogin = () => {
        setClose(!close)
        navigate("/home")
    }

    const ShowMenu = () => {
        setHeader(!header)
        navigate("/home")
    }
    
    const ifPopupOpen = () => {
        setToggler(!Toggler);
    }

    const SignIn = () => {
        auth.signInWithPopup(provider).then((result) => {
                setUser(result.user);
                navigate("/home") 
            }).catch((error) => {
                alert(error.message);
            });
    };

    const setUser = (user) => {
        dispatch (
            setLoginState({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        );
    } ;

    const SignOut = () => {
        auth.signOut().then(() => {
            dispatch (
                setLogOutState()
            )
            navigate("/");
        })
       
    }

    return (
        <>
            <Nav>
                <Link to="/">
                    <img src="/images/logo.svg" alt="Disney+" />
                </Link> 
                        <>
                        <NavMenu active={header}>
                            <Link to="/home">
                                <img id="homeicone"src="/images/home-icon.svg" alt="HOME" />
                                <span>INÍCIO</span>
                            </Link>
                            <Link to="/search">
                                <img src="/images/search-icon.svg" alt="HOME" />
                                <span>PESQUISA</span>
                            </Link>
                            <Link to="/watchlist">
                                <img src="/images/watchlist-icon.svg" alt="HOME" />
                                <span>MINHA LISTA</span>
                            </Link>
                            <Link to="/original">
                                <img src="/images/original-icon.svg" alt="HOME" />
                                <span>ORIGINAIS</span>
                            </Link>
                            <Link to="/movies">
                                <img src="/images/movie-icon.svg" alt="HOME" />
                                <span>FILMES</span>
                            </Link>
                            <Link to="/series">
                                <img src="/images/series-icon.svg" alt="HOME" />
                                <span>SÉRIES</span>
                            </Link>
                        </NavMenu>
                        <UserAuth><img src="/images/37b7be99-8e06-4df1-83d7-8df777134cf0.jpg" onClick={ifPopupOpen} alt="LogoJuan" /></UserAuth>
                        <PopUpMenu active={Toggler}>
                            <li>
                                <Link to="/home" className="nav-link">
                                    <img style={{width: '0.8rem', height: '0.8rem'}} src="/images/home-icon.svg" />
                                    <span>INÍCIO</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link">
                                    <img style={{width: '0.8rem', heigth: '0.8rem'}} src="/images/shutdown.svg" />
                                    <span onClick={SignOut}>SAIR</span>
                                </Link>
                            </li>
                        </PopUpMenu>
                        <Login active={header} onClick={ShowMenu}>ENTRAR</Login>
                    </>
            </Nav>
        </>
    );
}

const Nav = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 42px;
    z-index: 3;

    img {
        padding: 0;
        width: 75px;
        margin-top: 4px;
        max-height: 70px;
        font-size: 0;
        display: block;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 35px;

    a {
        display: flex;
        align-items: center;
        padding: 0 15px;
        
        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        #homeicone {
            height: 13px;
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            margin-left: 8px;
            margin-top: 6px;
            white-space: nowrap;
            position: relative;

            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

    @media screen and (max-width: 1035px) and (max-width: 1050px) {
        display: none;
    }
    
`;

const UserAuth = styled.div`
    width: 50px;
    height: 50px;
    object-fit: center;
    margin-bottom: 8px;
    display: flex;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 100px;
        cursor: pointer;
    }
`;

const Login = styled.a`
    display: ${e => e.active ? 'none' : 'flex'};
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

`;

const PopUpMenu = styled.div`
    position: absolute;
    top: 7vh;
    right: 3.5rem;
    z-index: 4000;
    padding: 0.5rem 1rem;
    background-color: #040714;
    border-radius: 0.345rem;
    border: 1.3px solid rgba(151, 151, 151, 1);
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;

    display: ${e => e.active ? 'flex' : 'none'};
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    cursor: pointer;

    li {
        width: 100%;
        display: flex;
        align-items: flex-start;
        border-bottom: 1.3px solid rgba(151, 151, 151, 1);
        list-style: none;
        margin-bottom: 15px;
        
        .nav-link {
            display: flex;
            align-items: center;
            text-decoration: none;
            position: relative;
            
            img {
                width: 1.3rem;
                height: 1.3rem;
                object-fit: contain;
            }

            span {
                color: rgb(249, 249, 249);
                font-size: 13px;
                font-weight: 300;
                letter-spacing: 1px;
                line-height: 1.08;
                padding: 0px 5px;
                margin-top: 5px;
                position: relative;
            }
        }
    }
    
`;


export default Header;