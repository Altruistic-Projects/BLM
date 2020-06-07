import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FixedMenu, StartingMenu, MenuItemSection, MenuTitleStarting, MenuTitle, MenuItemStarting, MenuItem, Small, Medium, Large, PlaceHolderBlock } from "../styledComponents";
import { BrowserRouter, withRouter } from "react-router-dom";

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



    const createFixedMenu = () => {
        return (
            <FixedMenu>
                <MenuTitle onClick={scrollToTop}>BLM</MenuTitle>
                <MenuItemSection>
                    <PlaceHolderBlock></PlaceHolderBlock>
                    <MenuItem href="/donate">Donate</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <MenuItem>Vote</MenuItem>
                    <MenuItem>Remember</MenuItem>
                </MenuItemSection>
            </FixedMenu>
        )
    }

    const startingMenu = () => {
        return (
            <StartingMenu>
                <MenuTitleStarting onClick={scrollToTop}>BLM</MenuTitleStarting>
                <MenuItemSection>
                    <PlaceHolderBlock></PlaceHolderBlock>
                    <MenuItemStarting href="/donate">Donate</MenuItemStarting>
                    <MenuItemStarting href="/donate">Contact</MenuItemStarting>
                    <MenuItemStarting href="/donate">Vote</MenuItemStarting>
                    <MenuItemStarting href="/donate">Remember</MenuItemStarting>
                </MenuItemSection>
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