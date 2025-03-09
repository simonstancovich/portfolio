import React from "react";
import {
  Card,
  ImageWrapper,
  Image,
  LinkOverlay,
  TextWrapper,
  Wrapper,
} from "./ClientCard.styled";

interface ClientCardProps {
  imageUrl: string;
  text: string;
  link?: string;
  imagePosition?: "left" | "right";
  title: string;
}

export const ClientCard: React.FC<ClientCardProps> = ({
  imageUrl,
  text,
  link,
  imagePosition = "left",
  title = "",
}) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <Card imagePosition={imagePosition}>
        <ImageWrapper>
          <Image src={imageUrl} alt="Client case" />
          {link && (
            <LinkOverlay href={link} target="_blank" rel="noopener noreferrer">
              Visit Link
            </LinkOverlay>
          )}
        </ImageWrapper>
        <TextWrapper>
          <p>{text}</p>
        </TextWrapper>
      </Card>
    </Wrapper>
  );
};
