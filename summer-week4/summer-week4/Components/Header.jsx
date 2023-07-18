import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Card from "./Card";
import { faSun, faMoon, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GlobalStyle = createGlobalStyle`
  * {
    background-color: ${props => (props.isDarkMode ? "black" : "white")};
    color: ${props => (props.isDarkMode ? "white" : "black")};
    }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;

  .navBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .logo {
    display: flex;
  }
`;

const Logo = styled.div`
  display: flex;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: bold;
`;

const Menus = styled.div`
  display: flex;
  flex-direction: row;
`;

const Menu = styled.div`
  padding-right: 10px;
`;

const LoginButton = styled.button`
  display: flex;
  background-color: black;
  border: 1px solid black;
  border-radius: 1rem;
  color: white;
  font-weight: bold;
`;

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setIsDarkMode(prevState => !prevState);
        onDarkModeToggle(!isDarkMode); // 부모 컴포넌트로 전달
    };

    return (
        <>
            <GlobalStyle isDarkMode={isDarkMode} />
            <Nav>
                <Logo>Velog</Logo>

                <Menus>
                    <Menu onClick={handleDarkModeToggle}>
                        {isDarkMode ? (
                            <FontAwesomeIcon icon={faMoon} />
                        ) : (
                            <FontAwesomeIcon icon={faSun} />
                        )}
                    </Menu>
                    <Menu>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Menu>
                    <LoginButton>로그인</LoginButton>
                </Menus>
            </Nav>
        </>
    );
}

export default Header;
