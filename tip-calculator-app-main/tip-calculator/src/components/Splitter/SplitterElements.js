import styled from "styled-components";
import { ImageElement } from "../Image/ImageElement";

export const SplitterContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 92rem;
  margin: 0 auto;
  padding: 3.4rem;
  background: var(--White);
  min-height: 48rem;
  border-radius: 2rem;

  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr;
    max-width: 37.5rem;
    padding: 2.5rem;
  }
`;

export const SplitterContentColLeft = styled.div`
  padding: 0 1.4rem;

  @media screen and (max-width: 920px) {
    padding: 0;
  }
`;

export const SplitterContentColRight = styled.div`
  background: var(--Very-dark-cyan);
  border-radius: 2rem;
  padding: 3.8rem;

  @media screen and (max-width: 920px) {
    padding: 3.8rem 2.5rem 2.5rem;
  }
`;

export const InputFullWidthWrapper = styled.div`
  margin-top: 1rem;
  position: relative;

  &:first-of-type {
    margin-bottom: 4rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    border: ${(props) => (props.isPeopleError ? "2px solid var(--Error)" : "")};
    border: ${(props) => (props.isBillError ? "2px solid var(--Error)" : "")};
    pointer-events: none;
  }
`;

export const InputImage = styled(ImageElement)`
  position: absolute;
  top: 18px;
  left: 18px;
`;

export const InputFullWidthEl = styled.input`
  display: block;
  width: 100%;
  background: var(--Light-cyan);
  border: 2px solid var(--Light-cyan);
  border-radius: 0.5rem;
  padding: 0.6rem;
  font-size: 2.4rem;
  text-align: right;
  outline: none;
  transition: 0.3s all;
  font-family: var(--Font);
  font-weight: 700;
  color: var(--Very-dark-cyan);

  &::placeholder {
    color: var(--Dark-cyan);
  }

  &:hover,
  &:focus {
    border: 2px solid var(--Strong-cyan);
  }
`;

export const PercentForm = styled.form`
  position: relative;

  &::before {
    content: attr(data-text);
    position: absolute;
    right: 0;
    top: calc(100% + 8px);
    width: 150%;
    text-align: center;
    font-size: 1rem;
    background: var(--Very-dark-cyan);
    padding: 0.2rem;
    border-radius: 0.2rem;
    color: var(--White);
    transition: 0.3s opacity;
    opacity: 0;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100% - 8px);
    border: 8px solid;
    width: 8px;
    height: 8px;
    border-color: transparent transparent var(--Very-dark-cyan) transparent;
    transition: 0.3s opacity;
    opacity: 0;
    pointer-events: none;
  }

  &:hover:before,
  &:hover:after {
    opacity: 1;
  }
`;

export const InputCustomTip = styled.input``;

export const SplitterElementsHeading = styled.h3`
  color: var(--Dark-grayish-cyan);
  font-size: 1.6rem;

  @media screen and (max-width: 920px) {
    font-size: 1.2rem;
  }
`;

export const TipPercentBtnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  margin-top: 1.6rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TipPercentBtn = styled.button`
  border: none;
  background: var(--Very-dark-cyan);
  font-size: 2.4rem;
  color: var(--White);
  transition: 0.3s ease;
  text-transform: uppercase;
  padding: 0.6rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: var(--Font);
  font-weight: 700;

  &.active {
    background: ${(props) => (props.isActive ? "var(--Strong-cyan)" : "")};
    color: var(--Very-dark-cyan);

    &:hover {
      background: ${(props) => (props.isActive ? "var(--Strong-cyan)" : "")};
    }
  }

  &:hover {
    color: var(--Very-dark-cyan);
    background: var(--Light-grayish-cyan);
  }
`;

export const ResetBtn = styled(TipPercentBtn)`
  background: var(--Strong-cyan);
  width: 100%;
  color: var(--Very-dark-cyan);

  &:disabled {
    background: var(--Light-grayish-cyan);
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const ResultWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 2rem;

  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const ResultHeading = styled.p`
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  font-size: 1.4rem;

  @media screen and (max-width: 920px) {
    font-size: 1.2rem;
  }
`;

export const ResultHeadingTop = styled.span`
  color: var(--White);
`;

export const ResultHeadingBottom = styled.span`
  color: var(--Dark-grayish-cyan);
`;

export const ResultAmount = styled.h2`
  grid-column: 2/4;
  color: var(--Strong-cyan);
  text-align: right;
  font-size: 4rem;

  @media screen and (max-width: 920px) {
    font-size: 2.6rem;
  }
`;

export const ErrorMsg = styled.span`
  color: var(--Error);
  position: absolute;
  right: 0;
  top: -34px;
  font-weight: 700;

  @media screen and (max-width: 920px) {
    font-size: 1rem;
    top: -26px;
  }
`;
