import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
	FooterContainer,
	SocialBox,
	SocialBoxContent,
	FollowMeText,
	SocialLink,
	CopyrightText,
} from './Footer.styled';

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<FooterContainer>
			<SocialBox>
				<SocialBoxContent>
					<FollowMeText>Follow me:</FollowMeText>
					<div>
						<SocialLink
							href='https://github.com/simonstancovich'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitHub'
						>
							<FaGithub />
						</SocialLink>
						<SocialLink
							href='https://se.linkedin.com/in/stancovich'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='LinkedIn'
						>
							<FaLinkedin />
						</SocialLink>
					</div>
				</SocialBoxContent>
			</SocialBox>

			<CopyrightText>© {currentYear} Simon Stancovich</CopyrightText>
		</FooterContainer>
	);
};
