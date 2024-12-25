import React from 'react';
import { Wrapper } from './Resume.styled';
import { List, ListItem, Section, TwoColumnsSection } from '../../components';

// interface ResumeProps {
// 	children: React.ReactNode;
// }

export const Resume: React.FC = () => {
	return (
		<Wrapper>
			<TwoColumnsSection>
				<Section>
					<List>
						<ListItem>📅 33 years old</ListItem>
						<ListItem>📍 Stockholm, Sweden 🇸🇪</ListItem>
						<ListItem>📞 +46 734 200 137</ListItem>
						<ListItem>✉️ Simon.Max.Stancovich@gmail.com</ListItem>
						<ListItem>
							🔗{' '}
							<a
								href='https://github.com/valericos'
								target='_blank'
								rel='noopener noreferrer'
							>
								github.com/valericos
							</a>
						</ListItem>
					</List>
				</Section>
				<Section>
					<List>
						<ListItem>Column 2</ListItem>
						<ListItem>Content for the second column.</ListItem>
					</List>
				</Section>
			</TwoColumnsSection>
		</Wrapper>
	);
};
