import styled, { css, keyframes } from "styled-components";
import icon from "../assets/blm-icon.png";

export const Row = styled.div`
    background: red;
    width: 100%;
`

/** MENU STUFF */

export const HeroBody = styled.div`
    background: black;
    height: 100vh;
    text-align: center;
`

export const HeroTitle = styled.span`
    color: white;
    font-weight: bolder;
    font-size: 90px;
    margin: 0;
    position: absolute;
    top: 25%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 479px) {
        font-size: 70px;
    }
`

export const HeroSummary = styled.span`
    color: white;
    font-size: 20px;
    margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 500px;

    @media only screen and (max-width: 479px) {
        top: 50%;
        width: 300px;
    }

`


export const Hero2 = styled.div`
    background: white;
    width: 100%;
    height: 5000px;
`

/** BUTTON STUFF */

export const HeroButtonBody = styled.div`
    color: white;
    border: 2px solid white;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0;
    box-shadow: 2px 2px 9px -2px rgba(255,255,255,1);
`

export const HeroButtonContainer = styled.div`
    font-size: 20px;
    margin: 0;
    position: absolute;
    top: 60%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 550px;

    @media only screen and (max-width: 479px) {
        top: 70%;
        width: 250px;
    }
`

/** MENU STUFF */

export const FixedMenu = styled.div`
    overflow: hidden;
    position: fixed;
    top: 0;
    background-color: none;
    color: black;
    padding: 10px;
    width: 100%;
    box-shadow: 0 4px 6px -6px #222;
`

export const StartingMenu = styled.div`
    overflow: hidden;
    position: fixed;
    top: 0;
    background-color: none;
    color: white;
    padding: 10px;
    width: 100%;
`

export const MenuTitleStarting = styled.div`
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-weight: bolder;
`

export const MenuTitle = styled(MenuTitleStarting)`
    color: black;
`

export const MenuItemStarting = styled.a`
    pointer-events: none;
    color: white;
    text-align: center;
    padding: 5px;
    text-decoration: none !important;
    font-size: 14px 5px;
    visibility: hidden;
    &:hover {
        text-decoration: underline;
    }
`

export const MenuItem = styled(MenuItemStarting)`
    color: black;
`

export const PlaceHolderBlock = styled.div`
    height: 100px;
    transition: height 0.5s ease-in-out;
    &:active,
    &:hover {
        height: 0px;
    }
`

export const MenuItemSection = styled.div`
    background-image: url(${icon});
    color: black;
    float: right;
    text-align: center;
    padding: 14px;
    border: 1px solid white;
    border-radius: 50px;
    box-shadow: 1px -1px 5px 4px rgba(0,0,0,0.21);
    margin-right: 20px;
    transition: width 0.5s ease-in-out;
    width: 20px;
    height: 20px;

    &:active,
    &:hover {
        width: 250px;
        background-image: none;
        padding: 14px 14px;
        border-radius: 15px;
    }

    &:active,
    &:hover ${MenuItem} {
        visibility: visible;
        padding: 14px 5px;
        color: black;
        pointer-events: auto;
    }

    &:active,
    &:hover ${MenuItemStarting} {
        visibility: visible;
        pointer-events: auto;
    }

`

export const MenuItemSectionStarting = styled(MenuItemSection)`
    box-shadow: 0px 0px 5px #fff
    border: none;

    &:active,
    &:hover {
        color: white;
        width: 200px;
        border-radius: 15px;
    }
`

//** Mobile Responsive Stuff */

export const Small = styled.div`
    background: blue;
    display: none;
    @media only screen and (max-width: 479px) {
        display: block;
    }
`


export const Medium = styled.div`
    background: yellow;
    display: none;
    @media only screen and (min-width: 480px) and (max-width: 767px) {
        display: block;
    }
`

export const Large = styled.div`
    background: green;
    display: none;
    @media only screen and (min-width: 768px) {
        display: block;

    }
`
