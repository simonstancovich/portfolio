import { VerticalContainer } from '../../components';
import { ClientCard } from '../../components/clientCard/ClientCard';
import { experience } from '../../data/experienceData';
import { ExperienceWrapper } from './Experience.styled';

export const Experience = () => {
	return (
		<ExperienceWrapper>
			<VerticalContainer alignItems='center'>
				{experience.map((item, index) => {
					const position = index % 2 === 0 ? 'left' : 'right';

					return (
						<ClientCard
							key={item.title}
							title={item.title}
							imageUrl={`/assets/images/clients/${item.imageUrl}.png`}
							text={item.text}
							link={item.link}
							imagePosition={position}
						/>
					);
				})}
			</VerticalContainer>
		</ExperienceWrapper>
	);
};
