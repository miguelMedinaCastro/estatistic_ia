import React from 'react';
import styled, { keyframes } from 'styled-components'; 
import { Telescope } from 'lucide-react'; 

// Animação 
const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.4);
  }
  50% {
    text-shadow: 0 0 15px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 0.6);
  }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = styled.section`
  padding-top: 5rem; 
  padding-bottom: 3rem; 
  background: linear-gradient(to bottom, rgba(6, 17, 25, 0.9), rgb(6, 17, 25)),
              radial-gradient(ellipse at top, rgba(0, 255, 255, 0.15), transparent 70%);
  overflow: hidden;
  position: relative;
`;

const AbsoluteBgBlobs = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 84rem;

  & > div:nth-child(1) { 
    position: absolute;
    width: 16rem; 
    height: 16rem; 
    border-radius: 9999px; 
    background-color: ${props => props.theme.primary}0D; 
    filter: blur(3rem); 
    top: -5rem; 
    right: -5rem; 
  }

  & > div:nth-child(2) { 
    position: absolute;
    width: 18rem; 
    height: 18rem; 
    border-radius: 9999px; 
    background-color: ${props => props.theme.secondary}0D; 
    filter: blur(3rem); 
    bottom: -5rem; 
    left: -5rem; 
  }
`;

const ContentContainer = styled.div`
  container: inherit; 
  margin-right: auto;
  padding-left: 1rem; 
  padding-right: 1rem; 
  position: relative;
  z-index: 10;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 3rem; 
  align-items: center; 

  @media (min-width: 768px) { 
    flex-direction: row; 
    justify-content: space-between; 
  }
`;

const TextContent = styled.div`
  flex: 1; 
  text-align: center;

  @media (min-width: 768px) {
    text-align: left; 
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem; 
  line-height: 2.5rem; 
  font-weight: 700;
  color: ${props => props.theme.foreground}; 
  margin-bottom: 1.5rem;

  @media (min-width: 768px) { 
    font-size: 3rem; 
    line-height: 1;
  }

  @media (min-width: 1024px) { 
    font-size: 3.75rem; 
    line-height: 1;
  }
`;

const HighlightedText = styled.span`
  display: block; 
  color: ${props => props.theme.primary}; 
  margin-top: 0.5rem; 
  animation: ${glow} 2s infinite alternate; 
`;

const HeroDescription = styled.p`
  font-size: 1.125rem; 
  line-height: 1.75rem; 
  color: ${props => props.theme.mutedForeground}; 
  margin-bottom: 2rem; 
  max-width: 28rem; 
  margin-left: auto; 
  margin-right: auto; 

  @media (min-width: 768px) { 
    margin-left: 0; 
    margin-right: 0;
  }
`;

const CtaButtons = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 1rem; 
  justify-content: center; 

  @media (min-width: 640px) { 
    flex-direction: row; 
  }

  @media (min-width: 768px) { 
    justify-content: flex-start; 
  }
`;

const BaseButton = styled.a`
  display: inline-block; 
  padding: 0.75rem 2rem;
  border-radius: 9999px; 
  font-weight: 500; 
  transition: all 0.3s ease-in-out; 
  text-decoration: none; 
  text-align: center; 
`;

const PrimaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.primary}; 
  color: ${props => props.theme.background}; 
  &:hover {
    box-shadow: 0 0 15px ${props => props.theme.primary}66; 
    transform: translateY(-2px); 
  }
`;

const SecondaryButton = styled(BaseButton)`
  background-color: transparent; 
  border: 1px solid ${props => props.theme.primary}; 
  color: ${props => props.theme.primary}; 

  &:hover {
    background-color: ${props => props.theme.primary}1A; 
  }
`;

const ImageContent = styled.div`
  flex: 1; 
  display: flex;
  justify-content: center; 

  @media (min-width: 768px) { 
    justify-content: flex-end; 
    padding-right: 3.5rem;
  }
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 16rem; 
  height: 16rem; 
  background-color: ${props => props.theme.card}; 
  border-radius: 9999px; 
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.primary}4D; 
  box-shadow: 0 0 25px ${props => props.theme.primary}66; 

  @media (min-width: 768px) { 
    width: 20rem; 
    height: 20rem; 
  }
`;

const StyledTelescope = styled(Telescope)`
  width: 8rem; 
  height: 8rem;
  color: ${props => props.theme.primary}; 
  animation: ${float} 3s infinite ease-in-out; 

  @media (min-width: 768px) { 
    width: 10rem; 
    height: 10rem; 
  }
`;

const SmallBlobTopRight = styled.div`
  position: absolute;
  top: -1rem; 
  right: -1rem; 
  width: 5rem; 
  height: 5rem; 
  border-radius: 9999px; 
  background-color: ${props => props.theme.secondary}33; 
  filter: blur(2.5rem); 
`;

const SmallBlobBottomLeft = styled.div`
  position: absolute;
  bottom: -1.5rem; 
  left: -1.5rem; 
  width: 6rem; 
  height: 6rem; 
  border-radius: 9999px; 
  background-color: ${props => props.theme.primary}33; 
  filter: blur(2.5rem); 
`;

const StatsGrid = styled.div`
  margin-top: 5rem; 
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); 
  gap: 2rem; 
  text-align: center; 

  @media (min-width: 768px) { 
    grid-template-columns: repeat(4, minmax(0, 1fr)); 
  }
`;

const StatItem = styled.div`
  h3 {
    color: ${props => props.theme.primary}; 
    font-size: 2.25rem; 
    line-height: 2.5rem;
    font-weight: 700; 
    margin-bottom: 0.5rem; 
  }
  p {
    color: ${props => props.theme.mutedForeground}; 
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <AbsoluteBgBlobs>
        <div /> 
        <div /> 
      </AbsoluteBgBlobs>
      
      <ContentContainer>
        <FlexWrapper>
          <TextContent>
            <HeroTitle>
              Interdisciplinaridade na Escola com
              <HighlightedText>
                Ciência de Dados e IA
              </HighlightedText>
            </HeroTitle>
            
            <HeroDescription>
              Um assistente virtual para professores que planeja atividades interdisciplinares
              baseadas em dados estatísticos reais e alinhadas à BNCC.
            </HeroDescription>
            
            <CtaButtons>
              <PrimaryButton href="#benefits">
                Descubra os Benefícios
              </PrimaryButton>
              <SecondaryButton href="#features">
                Explore os Recursos
              </SecondaryButton>
            </CtaButtons>
          </TextContent>
          
          <ImageContent>
            <CircleWrapper>
              <StyledTelescope /> 
              <SmallBlobTopRight />
              <SmallBlobBottomLeft />
            </CircleWrapper>
          </ImageContent>
        </FlexWrapper>
        
        <StatsGrid>
          <StatItem>
            <h3>BNCC</h3>
            <p>Alinhamento Curricular</p>
          </StatItem>
          <StatItem>
            <h3>ODS</h3>
            <p>Metas Globais</p>
          </StatItem>
          <StatItem>
            <h3>IA</h3>
            <p>Tecnologia Educacional</p>
          </StatItem>
          <StatItem>
            <h3>Dados</h3>
            <p>Estatística Aplicada</p>
          </StatItem>
        </StatsGrid>
      </ContentContainer>
    </HeroSection>
  );
};

export default Hero;