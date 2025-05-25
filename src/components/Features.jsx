import React from 'react';
import styled from 'styled-components';

import planoaula2 from '../assets/planoaula2.jpg';
import integracao1 from '../assets/integracao1.jpg';
import estatistica1 from '../assets/estatistica1.jpg';
import planejamento1 from '../assets/planejamento1.jpg';
/**
 * @typedef {object} StyledProps
 * @property {import('../styles/themes').AppTheme} tema
 * @property {boolean} [$isEvenIndex] layout de elementos
 */

// layout features

/** @type {import('styled-components').ThemedStyledFunction<"section", StyledProps>} */
const FeaturesSection = styled.section`
  padding-top: 5rem; 
  padding-bottom: 5rem; 
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.card},
    ${(props) => props.theme.card}F2 /* F2 = 95% de opacidade */
  );
`;

const ContentContainer = styled.div`
  max-width: 1280px;
  width: 100%;
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
  text-shadow: 0 0 10px rgb(0, 255, 255),
    0 0 20px rgba(0, 255, 255, 0.5);
`;

const SectionDescription = styled.p`
  color: ${(props) => props.theme.mutedForeground};
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;
/*ajustes p mobile */
const FeatureItem = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 2rem; 

  @media (min-width: 768px) { 
    flex-direction: ${(props) => (props.$isEvenIndex ? 'row' : 'row-reverse')};
    justify-content: center; 
    align-items: flex-start; 
    gap: 4rem; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", StyledProps>} */
const ImageWrapper = styled.div`
  min-width: 0;
  background-color: ${(props) => props.theme.background}80;
  padding: 0.25rem;
  border-radius: ${(props) => props.theme.radius};
  border: 1px solid ${(props) => props.theme.primary}33;
  box-shadow: 0 0 25px ${(props) => props.theme.primary}66;
  overflow: hidden;
  
  width: 100%; 
  max-width: 250px; 
  
  @media (min-width: 768px) {
    max-width: 350px; 
    margin-right: ${(props) => (props.$isEvenIndex ? '2rem' : '0')}; 
    margin-left: ${(props) => (!props.$isEvenIndex ? '2rem' : '0')};  
    flex-shrink: 0; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"img", StyledProps>} */
const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: ${(props) => props.theme.radius};
  object-fit: cover;
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", StyledProps>} */
const TextContent = styled.div`
  flex: 1; 
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 50%; 
    flex-shrink: 0; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"h3", StyledProps>} */
const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 1rem;
`;

/** @type {import('styled-components').ThemedStyledFunction<"p", StyledProps>} */
const FeatureDescription = styled.p`
  color: ${(props) => props.theme.mutedForeground};
  margin-bottom: 1.5rem;
`;

/** @type {import('styled-components').ThemedStyledFunction<"ul", StyledProps>} */
const FeatureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

/** @type {import('styled-components').ThemedStyledFunction<"li", StyledProps>} */
const FeatureListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", StyledProps>} */
const CheckIconWrapper = styled.div`
  color: ${(props) => props.theme.primary};
  margin-top: 0.25rem;
  
  svg {
    width: 1.25rem !important;
    height: 1.25rem !important;
    min-width: 1.25rem;
    min-height: 1.25rem;
    flex-shrink: 0;
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"span", StyledProps>} */
const FeatureListItemText = styled.span`
  color: ${(props) => props.theme.mutedForeground};
`;


const Features = () => {
  const features = [
    {
      title: "Geração de Planos de Aula",
      description: "Crie planos de aula personalizados com base em critérios específicos como série, disciplina, tema e objetivos pedagógicos.",
      image: planoaula2,
      bullets: [
        "Alinhamento automático com a BNCC e ODS",
        "Sugestões de atividades personalizadas",
        "Materiais de apoio para estudantes e professores",
      ],
    },
    {
      title: "Integração Curricular",
      description: "Conecte diferentes áreas do conhecimento em atividades que promovam uma visão holística e contextualizada do aprendizado.",
      image: integracao1,
      bullets: [
        "Conexão entre disciplinas diversas",
        "Contextualização com questões sociais e ODS",
        "Abordagem por projetos e problematização",
      ],
    },
    {
      title: "Dados Estatísticos Atualizados",
      description: "Acesse e utilize dados reais em suas aulas, tornando o aprendizado mais relevante e significativo para os estudantes.",
      image: estatistica1,
      bullets: [
        "Visualizações interativas de dados estatísticos",
        "Fontes confiáveis e atualizadas regularmente",
        "Adaptação dos dados para diferentes níveis escolares",
      ],
    },
    {
      title: "Acompanhamento de Progresso",
      description: "Monitore o desenvolvimento das competências e habilidades previstas na BNCC com ferramentas de avaliação integradas.",
      image: planejamento1,
      bullets: [
        "Relatórios personalizados de desempenho",
        "Identificação de competências desenvolvidas",
        "Sugestões de intervenções pedagógicas",
      ],
    },
  ];

  return (
    <FeaturesSection id="features">
      <ContentContainer>
        <HeaderWrapper>
          <SectionTitle>
            Recursos <HighlightedText>Inovadores</HighlightedText>
          </SectionTitle>
          <SectionDescription>
            Nossa plataforma oferece ferramentas avançadas para transformar sua abordagem pedagógica e engajar os estudantes de forma significativa.
          </SectionDescription>
        </HeaderWrapper>

        <FeaturesList>
          {features.map((feature, index) => (
            <FeatureItem key={index} $isEvenIndex={index % 2 === 0}>
              <ImageWrapper $isEvenIndex={index % 2 === 0}> 
                <FeatureImage src={feature.image} alt={feature.title} />
              </ImageWrapper>

              <TextContent>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>

                <FeatureList>
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <FeatureListItem key={bulletIndex}>
                      <CheckIconWrapper>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </CheckIconWrapper>
                      <FeatureListItemText>{bullet}</FeatureListItemText>
                    </FeatureListItem>
                  ))}
                </FeatureList>
              </TextContent>
            </FeatureItem>
          ))}
        </FeaturesList>
      </ContentContainer>
    </FeaturesSection>
  );
};

export default Features;