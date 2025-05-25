import React from 'react';
import styled from 'styled-components';
import { BookOpen, UserPlus, LineChart, Clock } from 'lucide-react';

// componentes dos beneficios

const BenefitsSection = styled.section`
  padding-top: 5rem; 
  padding-bottom: 5rem; 
  background-color: ${(props) => props.theme.card}; 
  position: relative; 
`;

const ContentContainer = styled.div`
  container: inherit;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem; 
  padding-right: 1rem; 
`;

const HeaderWrapper = styled.div`
  text-align: center; 
  margin-bottom: 4rem; 
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem; 
  line-height: 2.25rem;
  font-weight: 700; 
  color: ${(props) => props.theme.foreground}; 
  margin-bottom: 1rem; 

  @media (min-width: 768px) { 
    font-size: 2.25rem; 
    line-height: 2.5rem;
  }
`;

const HighlightedText = styled.span`
  color: ${(props) => props.theme.primary}; 
  text-shadow: 0 0 10px rgb(0, 255, 255), 0 0 20px rgba(0, 255, 255, 0.5); 
`;

const SectionDescription = styled.p`
  color: ${(props) => props.theme.mutedForeground}; 
  max-width: 42rem; 
  margin-left: auto; 
  margin-right: auto; 
`;

const BenefitsGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(1, minmax(0, 1fr)); 
  gap: 2rem; 

  @media (min-width: 768px) { 
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
  }

  @media (min-width: 1024px) { 
    grid-template-columns: repeat(4, minmax(0, 1fr)); 
  }
`;

const BenefitCard = styled.div`
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.card},
    ${(props) => props.theme.card}cc
  ); 
  border-radius: ${(props) => props.theme.radius}; 
  padding: 1.5rem; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
  text-align: center; 
  transition: all 0.3s ease-in-out; 

  &:hover {
    box-shadow: 0 0 20px ${(props) => props.theme.primary}66; 
    transform: translateY(-0.5rem); 
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem; 
  padding: 0.75rem; 
  border-radius: 9999px; 
  background-color: ${(props) => props.theme.background}80; 
  border: 1px solid ${(props) => props.theme.primary}4D; 

  .lucide {
    color: ${(props) => props.theme.primary}; 
    width: 3rem; 
    height: 3rem; 
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem; 
  line-height: 1.75rem;
  font-weight: 600; 
  color: ${(props) => props.theme.foreground}; 
  margin-bottom: 0.75rem; 
`;

const CardDescription = styled.p`
  color: ${(props) => props.theme.mutedForeground}; 
`;

const ExploreLinkWrapper = styled.div`
  margin-top: 4rem; 
  text-align: center; 
`;

const ExploreLink = styled.a`
  display: inline-flex; 
  align-items: center; 
  color: ${(props) => props.theme.primary}; 
  text-decoration: none;
  transition: text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline; 
  }

  svg {
    width: 1.25rem; 
    height: 1.25rem; 
    margin-left: 0.5rem; 
  }
`;

const TopGradientOverlay = styled.div`
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 5rem; 
  background: linear-gradient(to bottom, ${(props) => props.theme.card}, transparent); 
`;

const BottomGradientOverlay = styled.div`
  position: absolute; 
  bottom: 0; 
  left: 0; 
  width: 100%; 
  height: 5rem; 
  background: linear-gradient(to top, ${(props) => props.theme.card}, transparent);
`;

const Benefits = () => {
  const benefits = [
    {
      icon: <BookOpen />,
      title: "Criatividade no Planejamento",
      description: "Crie planos de aula interdisciplinares em minutos, alinhados à BNCC e aos Objetivos de Desenvolvimento Sustentável."
    },
    {
      icon: <UserPlus />,
      title: "Protagonismo Estudantil",
      description: "Promova atividades que desenvolvem autonomia, pensamento crítico e participação ativa dos estudantes."
    },
    {
      icon: <LineChart />,
      title: "Dados Reais",
      description: "Trabalhe com estatísticas atualizadas para contextualizar o aprendizado e conectar o conteúdo à realidade."
    },
    {
      icon: <Clock />,
      title: "Economia de Tempo",
      description: "Reduza o tempo de preparação de aulas e foque mais na interação com seus estudantes e na mediação do conhecimento."
    }
  ];

  return (
    <BenefitsSection id="benefits">
      <ContentContainer>
        <HeaderWrapper>
          <SectionTitle>
            Benefícios para <HighlightedText>Professores</HighlightedText>
          </SectionTitle>
          <SectionDescription>
            Estatistic.IA transforma sua prática pedagógica, proporcionando ferramentas inovadoras para um ensino mais eficiente e significativo.
          </SectionDescription>
        </HeaderWrapper>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <IconWrapper>
                {benefit.icon} 
              </IconWrapper>
              <CardTitle>{benefit.title}</CardTitle>
              <CardDescription>{benefit.description}</CardDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>
        
        <ExploreLinkWrapper>
          <ExploreLink href="#features">
            Conheça nossos recursos detalhados
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </ExploreLink>
        </ExploreLinkWrapper>
      </ContentContainer>
      
      <TopGradientOverlay />
      <BottomGradientOverlay />
    </BenefitsSection>
  );
};

export default Benefits;