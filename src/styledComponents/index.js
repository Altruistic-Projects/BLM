import styled, { css, keyframes } from "styled-components";
import icon from "../assets/blm-icon.png";

export const IconSpacing = styled.span`
    margin: 0 5px 0 0;
`

export const White = styled.div`
    color: white;
`

export const TitleLeft = styled.span`
    @media only screen and (max-width: 479px) {
        width: 200px;
    }
`

export const PetitionBody = styled.div`
    height: 100vh;
    max-width: 600px;
    margin: 50px auto;
`

export const InputLabel = styled.label`
    font-weight: 550;
`

export const UnderConstruction = styled.div`
    padding: 100px 20px;
    height: calc(100vh + 20px);
`

export const CenteredBold = styled.div`
    font-weight: bolder;
    text-align: center;
    margin-bottom: 5px;
`

export const VoteCenteredBold = styled(CenteredBold)`
    margin-bottom: 200px;
`

export const GenericButtonBody = styled.a`
    color: white;
    background-color: black;
    border: 2px solid black;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    margin: 10px auto;
    width: 700px;
    box-shadow: 2px 2px 9px -2px rgba(255,255,255,1);
    display: block;
    text-decoration: none;

    @media only screen and (max-width: 479px) {
        width: 250px;
    }
`

export const VoteButtonBody = styled(GenericButtonBody)`
@media only screen and (max-width: 479px) {
    margin-bottom: 200px;
}
`

export const PreviewSection = styled.div`
    width: 700px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f1f1f1;
    white-space: pre-line;

    @media only screen and (max-width: 479px) {
        width: 250px;
    }
`

export const InputElement = styled.input`
    width: 90%;
    margin: 5px auto;
    border-radius: 5px;
    height: 20px;
    font-size: 20px;
    display: block;

    @media only screen and (min-width: 780px) {
        width: 500px;
    }
`

export const InputBody = styled.div`
    margin: 0 0 10px;
`

export const Row = styled.div`
    background: red;
    width: 100%;
`

export const SectionBody = styled.div`
    margin: 40px auto 0;
    max-width: 700px;
`

export const SectionTitle= styled.h3``

export const SectionSummary = styled.div`
    padding: 0 0 10px;
`

export const PageTitle = styled.h1`
    text-align: center;
`

export const PageSummary = styled.p`
    text-align: center;
    padding: 0 20px 20px;
`

/** INFO CARD Stuff */

export const InfoCardContent = styled.div`
    padding: 18px;
    display: none;
    overflow: hidden;
    background-color: #f1f1f1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const InfoCardTitle = styled.div`
    color: white;
    padding: 10px 0 20px 20px;
`

export const InfoCardBody = styled.div`

    border: 1px solid black;
    padding-top: 10px;
    border-radius: 10px;
    margin: 10px 0;
    box-shadow: 2px 2px 9px -2px rgba(255,255,255,1);
    transition: height 0.5s ease-in-out;
    background-color: black;

    &:active,
    &:hover ${InfoCardContent} {
        display: block;
    }
`

export const InfoCardDonateLink = styled.div`
    float: right;
    text-decoration: underline;
    color: white;
    padding: 0px 20px;

`

/** MENU STUFF */

export const HeroBody = styled.div`
    background: black;
    height: 100vh;
    // height: ${props => props.theme.isInstagram ? "calc(var(--vh, 1vh) * 50)" : "calc(var(--vh, 1vh) * 100)"};
    height: calc(var(--vh, 1vh) * 100);
    text-align: center;
`

export const HeroTitle = styled.span`
    color: white;
    font-weight: bolder;
    font-size: 70px;
    margin: 0;
    position: absolute;
    top: 25%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 479px) {
        font-size: 30px;
        top: 27%;
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
        top: 40%;
        width: 300px;
    }

`

/** BUTTON STUFF */

export const HeroButtonBody = styled.div`
    color: black;
    background-color: white;
    font-weight: bolder;
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
    background-color: rgb(255, 255, 255, 0.8);
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
    color: black !important;
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
        background-color: white;
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

    &:active,
    &:hover ${PlaceHolderBlock} {
        height: 0px;
    }

`

export const MenuItemSectionStarting = styled(MenuItemSection)`
    box-shadow: 0px 0px 5px #fff
    border: none;

    &:active,
    &:hover {
        background-color: black;
    }
`
//** PAGES Stuff */

export const PageBody = styled.div`
    margin-top: 80px;
    padding: 20px 40px;
`


//** Mobile Responsive Stuff */

export const Small = styled.div`
    display: none;
    @media only screen and (max-width: 479px) {
        display: block;
    }
`


export const Medium = styled.div`
    display: none;
    @media only screen and (min-width: 480px) and (max-width: 767px) {
        display: block;
    }
`

export const Large = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
        display: block;

    }
`
export const DropDownBody = styled.div`
    // margin: 35px 0;
    // height: 25px;
    // padding: 20px;

    padding: 12px;
    margin: 10px auto;
    width: 500px;
    display: block;

    @media only screen and (max-width: 479px) {
        width: auto;
    }
`

export const CustomSelect = styled.select`
    width: 100%;
    border-radius: 5px;
    font-size: 15px;
    margin: 5px 0;
`

export const CustomSelectWrapper = styled.span`
    > select {
        width: 100%;
        border-radius: 5px;
        font-size: 15px;
        margin: 5px 0;
    }
`

export const VoteDropdown = styled(DropDownBody)`
    padding: 50px 0 50px;
`