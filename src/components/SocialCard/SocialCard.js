import React from "react";
import styled, { css } from "styled-components";
import facebookIcon from "./img/facebook.svg";
import instagramIcon from "./img/instagram.svg";
import logInIcon from "./img/log-in.svg";

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 6px rgba(0, 0, 0, 0.1);
  }
`;

const LoginIcon = styled.img`
  height: 32px;
  width: 32px;
  display: none;
  @media (min-width: 576px) {
    display: block;
    margin-right: 1rem;
  }
`;

const LoginText = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-right: 1rem;
`;

const Background = css`
  ${props => {
    switch (props.buttonBackground) {
      case "facebook":
        return `#36559d`;
      case "instagram":
        return `linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      )`;
      default:
        return `rgba(0, 0, 0, .6)`;
    }
  }};
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.4rem;
  font-size: 0.8rem;
  border-radius: 2px;
  margin-left: auto;
  color: #fff;
  text-transform: capitalize;
  background: ${Background};
`;

const SocialCard = props => {
  let icon;
  switch (props.icon) {
    case "facebook":
      icon = facebookIcon;
      break;
    case "instagram":
      icon = instagramIcon;
      break;
    default:
      icon = logInIcon;
  }

  return (
    <Card>
      <LoginIcon src={icon} />
      <LoginText>{props.text}</LoginText>
      <Button buttonBackground={props.buttonBackground}>
        {props.buttonText}
      </Button>
    </Card>
  );
};

export default SocialCard;
