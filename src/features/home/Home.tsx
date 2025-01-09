import { VerticalContainer } from '../../components';
import { AnimatedText } from '../../components/animatedText/AnimatedText';
import { HorizontalContainer } from '../../components/horizontalContainer';
import { clients, languages, techStack, text } from '../../data/homeData';
import { AlternatingText } from './components/alternatingText/AlternatingText';
import {
	HomeWrapper,
	SubAboutText,
	SubHeaderText,
	TechStackHeader,
} from './Home.styled';

const Home = () => {
	return (
		<HomeWrapper>
			<HorizontalContainer>
				<VerticalContainer>
					<VerticalContainer>
						<AnimatedText text={text} />
						<SubHeaderText>
							Fullstack Developer | Problem Solver | Bug Hunter |
							Team Player
						</SubHeaderText>
						<SubAboutText>
							With 4 years of experience as a full-stack
							developer, I’ve worked on a diverse range of
							projects, collaborating closely with teams to
							deliver results. I focus on clear communication,
							supporting project managers, and mentoring junior
							developers. I believe in the power of knowledge
							sharing and kindness to drive success. My positive
							attitude and open communication style foster strong
							relationships with clients, making them feel
							comfortable sharing feedback and questions. This
							approach not only strengthens collaboration but also
							accelerates project timelines and leads to better
							outcomes.
						</SubAboutText>
					</VerticalContainer>
				</VerticalContainer>
				<VerticalContainer
					justifyContent='flex-end'
					alignItems='flex-end'
				>
					<VerticalContainer>
						<TechStackHeader>Tech Stack</TechStackHeader>
					</VerticalContainer>
					<VerticalContainer>
						<AlternatingText skills={techStack} />
					</VerticalContainer>
					<VerticalContainer>
						<TechStackHeader>Clients</TechStackHeader>
					</VerticalContainer>
					<VerticalContainer>
						<AlternatingText skills={clients} />
					</VerticalContainer>
					<VerticalContainer>
						<TechStackHeader>Languages</TechStackHeader>
					</VerticalContainer>
					<VerticalContainer>
						<AlternatingText skills={languages} />
					</VerticalContainer>
				</VerticalContainer>
			</HorizontalContainer>
			<HorizontalContainer>
				<VerticalContainer>
					<SubAboutText></SubAboutText>
				</VerticalContainer>
			</HorizontalContainer>
		</HomeWrapper>
	);
};

export default Home;
