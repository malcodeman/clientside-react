import styled, { css } from "styled-components";
import { Color } from "./constants";

export const ButtonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.green};
  color: #fff;
  padding: 0;
  border: 0;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
`;
