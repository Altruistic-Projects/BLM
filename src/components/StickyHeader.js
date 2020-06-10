import React, { Fragment, useEffect, useRef, useState } from 'react';
import { MenuItemSectionStarting, FixedMenu, StartingMenu, MenuItemSection, MenuTitleStarting, MenuTitle, MenuItemStarting, MenuItem, Small, Medium, Large, PlaceHolderBlock } from "../styledComponents";
import { BrowserRouter, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StickyHeader = (props) => {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    const navigateHome = () => {
        props.history.push("/home");
    }

    const scrollToTop = () => {
        window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    }

    const navigateTo = (link) => {
        return () => {
            window.scrollBy({left: 0, top: window.innerHeight, behavior: 'smooth'});
            props.history.push(link);
        }
    }



    const createFixedMenu = () => {
        return (
            <FixedMenu>
                <MenuTitle onClick={scrollToTop}><FontAwesomeIcon icon="home"/></MenuTitle>
                <MenuItemSection>
                    <PlaceHolderBlock></PlaceHolderBlock>
                    <MenuItem onClick={navigateTo("/donate")}>Donate</MenuItem>
                    <MenuItem onClick={navigateTo("/demand")}>Demand</MenuItem>
                    <MenuItem onClick={navigateTo("/vote")}>Vote</MenuItem>
                    <MenuItem onClick={navigateTo("/resources")}>Literature</MenuItem>
                </MenuItemSection>
            </FixedMenu>
        )
    }

    const startingMenu = () => {
        return (
            <StartingMenu>
                <MenuTitleStarting onClick={scrollToTop}>BLM</MenuTitleStarting>
                <MenuItemSectionStarting>
                    <PlaceHolderBlock></PlaceHolderBlock>
                    <MenuItemStarting onClick={navigateTo("/donate")}>Donate</MenuItemStarting>
                    <MenuItemStarting onClick={navigateTo("/demand")}>Demand</MenuItemStarting>
                    <MenuItemStarting onClick={navigateTo("/vote")}>Vote</MenuItemStarting>
                    <MenuItemStarting onClick={navigateTo("/resources")}>Literature</MenuItemStarting>
                </MenuItemSectionStarting>
            </StartingMenu>
        )
    }

    return (
        <div ref={ref}>
            <Small>
                {isSticky ? createFixedMenu() : startingMenu()}
            </Small>
            <Medium>
                {isSticky ? createFixedMenu() : startingMenu()}
            </Medium>
            <Large>
                {isSticky ? createFixedMenu() : startingMenu()}
            </Large>
        </div>
    )
};

export default withRouter(StickyHeader);