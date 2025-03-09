import styled, { keyframes } from "styled-components";

interface CardProps {
  imagePosition: "left" | "right";
}

export const Wrapper = styled.div`
  display: flex;
  width: 900px;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: ${({ imagePosition }) =>
    imagePosition === "left" ? "row" : "row-reverse"};
  width: 900px;
  height: 300px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    flex-direction: column;
    min-height: 500px;
  }
`;

const flipAnimation = keyframes`
  0% {
    transform: rotateY(0);
    opacity: 1;
  }
  100% {
    transform: rotateY(180deg);
    opacity: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 33.33%;
  height: 100%;
  position: relative;
  perspective: 1000px;
  background: rgba(33, 31, 35, 0.35);
  &:hover img {
    animation: ${flipAnimation} 0.6s forwards;
  }

  &:hover a {
    opacity: 1;
    transform: rotateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    max-height: 350px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  backface-visibility: hidden;
`;

export const LinkOverlay = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightText};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.sizes.mediumFont};
  opacity: 0;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: ${({ theme }) => theme.transitions.defaultOpacity},
    ${({ theme }) => theme.transitions.defaultTransform};
`;

export const TextWrapper = styled.div`
  width: 66.67%;
  padding: ${({ theme }) => theme.spacing.medium};
  overflow-y: auto;
  font-size: ${({ theme }) => theme.sizes.smallFont};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
