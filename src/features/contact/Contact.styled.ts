import styled from "styled-components";

export const ExperienceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SubHeaderText = styled.p`
  color: ${({ theme }) => theme.colors.font.white};
`;

export const TechStackHeader = styled.h2`
  text-align: left;
`;

export const SubAboutText = styled.span`
  word-wrap: break-word;
  word-break: keep-all;
  overflow-wrap: break-word;
  max-width: 490px;
  color: ${({ theme }) => theme.colors.font.white};
`;

export const EmailTitle = styled.h2`
  margin-bottom: 0px;
`;
