import { icons } from "../../assets/icons";
import { SvgIcon, VerticalContainer } from "../../components";
import { AnimatedText } from "../../components/animatedText/AnimatedText";
import { GradientText } from "../../components/gradientText/GradientText";
import { HorizontalContainer } from "../../components/horizontalContainer";
import { HorizontalScrollableContainer } from "../../components/horizontalScrollableContainer/HorizontalScrollableContainer";
import { TechCard } from "../../components/techCard/TechCard";
import { text } from "../../data/homeData";
import { techData } from "../../data/techData";
import {
  BlobWrapper,
  HomeWrapper,
  SubAboutText,
  SubHeaderText,
  TechStackHeader,
} from "./Home.styled";

const Home = () => {
  return (
    <HomeWrapper>
      <HorizontalContainer>
        <VerticalContainer>
          <VerticalContainer>
            <AnimatedText text={text} />
            <SubHeaderText>
              Fullstack Developer | Problem Solver | Bug Hunter | Team Player
            </SubHeaderText>
            <SubAboutText>
              With almost 5 years of experience as a full-stack developer, I’ve
              worked on a diverse range of projects, collaborating closely with
              teams to deliver results. I focus on clear communication,
              supporting project managers, and mentoring junior developers. I
              believe in the power of knowledge sharing and kindness to drive
              success. My positive attitude and open communication style foster
              strong relationships with clients, making them feel comfortable
              sharing feedback and questions. This approach not only strengthens
              collaboration but also accelerates project timelines and leads to
              better outcomes.
            </SubAboutText>
          </VerticalContainer>
        </VerticalContainer>
        <VerticalContainer justifyContent="center" alignItems="center">
          <BlobWrapper>
            <SvgIcon src={icons.blob} width="330px" height="330px" />
          </BlobWrapper>
        </VerticalContainer>
      </HorizontalContainer>
      <HorizontalContainer>
        <GradientText
          text='"Wake up, question your life choices, chug coffee, stare at
					code, fix one bug, create three more, pretend this is fine,
					drink more coffee, debate running away to a deserted island,
					remember you have bills to pay, code anyway, rinse and repeat."'
        />
      </HorizontalContainer>
      <HorizontalContainer>
        <VerticalContainer>
          <TechStackHeader>Tech Stack</TechStackHeader>
          <HorizontalScrollableContainer>
            <TechCard title="Front-end" items={techData.frontendSkills} />
            <TechCard title="Back-end" items={techData.backendSkills} />
            <TechCard title="Devops" items={techData.devopsSkills} />
            <TechCard
              title="Publications"
              items={techData.publicationsSkills}
            />
            <TechCard
              title="Integrations"
              items={techData.integrationsSkills}
            />
            <TechCard title="Libraries" items={techData.librariesSkills} />
          </HorizontalScrollableContainer>
        </VerticalContainer>
      </HorizontalContainer>
    </HomeWrapper>
  );
};

export default Home;
