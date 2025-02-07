import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export default function Sidebar({ showSidebar, handleNavLinkClick }) {
  return (
    <Container showSidebar={showSidebar}>
      <List>
        <ListItem className="about li_about" onClick={handleNavLinkClick}>
          <Link to="/">
            <a href="#about">About</a>
          </Link>
        </ListItem>
        <ListItem onClick={handleNavLinkClick}>
          <a href="#work">Work</a>
        </ListItem>
        <ListItem className="li_contact" onClick={handleNavLinkClick}>
          <a href="#contact">Contact</a>
        </ListItem>
      </List>
    </Container>
  );
}

const slideIn = keyframes`
  from {
    transform: translateY(-200%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-200%);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  transform: translateX(-150%);
  ${({ showSidebar }) =>
    showSidebar 
      ? css`
          animation: ${slideIn} 0.3s ease-in-out forwards;
        `
      : (!showSidebar && showSidebar !== null)
      ? css`
          animation: ${slideOut} 0.3s ease-in-out forwards;
        `
      : null};
  z-index: -1;
`;

const List = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 0;

  .li_about {
    border-bottom: none;
  }

  .li_contact {
    border-top: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  font-family: "Press Start 2P", cursive;
  color: #fff;
  background-color: #8400ff;
  text-shadow: 3px 2px 0 #8400ff;
  border-width: 0.5px 0;
  border-style: solid;
  border-color: #14db99;
  list-style: none;

  a {
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    color: #14db99;
  }
}`;
