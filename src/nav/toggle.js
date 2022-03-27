import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import moonIcon from "../resource/moon.png";
import sunIcon from "../resource/sun.png";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <img src={sunIcon} />
      <img src={moonIcon} />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0.8rem 0 0 0.5rem;
  overflow: hidden;
  padding: 0.5rem;
  float: right;
  width: 8rem;
  height: 3rem;

  img {
    height: auto;
    width: 2rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

export default Toggle;
