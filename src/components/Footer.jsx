import React from 'react';
import styled from 'styled-components';
import { Telescope } from 'lucide-react'; 


/**
 * @typedef {object} StyledProps
 * @property {import('../styles/themes').AppTheme} tema
 */


/** @type {import('styled-components').ThemedStyledFunction<"footer", StyledProps>} */
const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.card}; 
  padding-top: 4rem; 
  padding-bottom: 2rem; 
  border-top: 1px solid ${(props) => props.theme.primary}33; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", StyledProps>} */
const ContentWrapper = styled.div`
  max-width: 1280px; 
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem; 
  padding-right: 1rem; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", StyledProps>} */
const GridColumns = styled.div`
  display: grid; 
  grid-template-columns: repeat(1, minmax(0, 1fr)); 
  gap: 2rem; 
  margin-bottom: 3rem; 

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
  }

  @media (min-width: 1024px) { 
    grid-template-columns: repeat(4, minmax(0, 1fr)); 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", StyledProps>} */
const Column = styled.div`
  
`;

/** @type {import('styled-components').ThemedStyledFunction<"a", StyledProps>} */
const LogoLink = styled.a`
  display: flex; 
  align-items: center; 
  gap: 0.5rem; 
  margin-bottom: 0.5rem;
  text-decoration: none; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", StyledProps>} */
const LogoIconWrapper = styled.div`
  height: 2rem; 
  width: 2rem; 
  position: relative; 
  
  margin-left: 0.5rem; 

  .lucide { 
    height: 1.75rem; 
    width: 1.75rem; 
    color: ${(props) => props.theme.primary}; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"span", StyledProps>} */
const LogoText = styled.span`
  color: ${(props) => props.theme.primary}; 
  font-weight: 700; 
  font-size: 1.25rem; 
  letter-spacing: -0.025em; 

  span {
    color: ${(props) => props.theme.foreground}; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"p", StyledProps>} */
const DescriptionText = styled.p`
  color: ${(props) => props.theme.mutedForeground}; 
  margin-bottom: 1rem; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", StyledProps>} */
const SocialLinks = styled.div`
  display: flex; 
  space-x: 1rem; 

  & > *:not(:last-child) {
    margin-right: 1rem; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"a", StyledProps>} */
const SocialIconLink = styled.a`
  color: ${(props) => props.theme.primary}; 
  transition: color 0.3s ease; 

  &:hover {
    color: ${(props) => props.theme.foreground}; 
  }

  svg {
    width: 1.25rem; 
    height: 1.25rem; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"h3", StyledProps>} */
const ColumnTitle = styled.h3`
  color: ${(props) => props.theme.primary}; 
  font-weight: 700; 
  font-size: 1.125rem; 
  margin-bottom: 1rem; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"ul", StyledProps>} */
const NavList = styled.ul`
  list-style: none; 
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

/** @type {import('styled-components').ThemedStyledFunction<"li", StyledProps>} */
const NavListItem = styled.li`
`;

/** @type {import('styled-components').ThemedStyledFunction<"a", StyledProps>} */
const NavLink = styled.a`
  color: ${(props) => props.theme.mutedForeground}; 
  transition: color 0.3s ease; 
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.primary}; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", StyledProps>} */
const CopyrightSection = styled.div`
  border-top: 1px solid ${(props) => props.theme.border}; 
  padding-top: 2rem; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  align-items: center; 

  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"p", StyledProps>} */
const CopyrightText = styled.p`
  color: ${(props) => props.theme.mutedForeground}; 
  font-size: 0.875rem; 
  margin-bottom: 1rem; 

  @media (min-width: 768px) { 
    margin-bottom: 0; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", StyledProps>} */
const ODSInfo = styled.div`
  display: flex; 
  flex-direction: column; 
  text-align: center; 

  @media (min-width: 768px) { 
    flex-direction: row; 
    align-items: center; 
    text-align: left; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"p", StyledProps>} */
const ODSDescription = styled.p`
  color: ${(props) => props.theme.mutedForeground}; 
  font-size: 0.875rem; 

  span {
    color: ${(props) => props.theme.primary}; 
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <ContentWrapper>
        <GridColumns>
          <Column>
            <LogoLink href="#">
              <LogoIconWrapper>
                <Telescope /> 
              </LogoIconWrapper>
              <LogoText>
                Estatistic<span>.IA</span>
              </LogoText>
            </LogoLink>
            <DescriptionText>
              Transformando o ensino através da integração de dados estatísticos e inteligência artificial 
              para uma educação mais contextualizada e significativa.
            </DescriptionText>
          </Column>
          
          <Column>
            <ColumnTitle>Sobre</ColumnTitle>
            <NavList>
              <NavListItem><NavLink href="#">Nossa Missão</NavLink></NavListItem>
              <NavListItem><NavLink href="#">Equipe</NavLink></NavListItem>
              <NavListItem><NavLink href="#">Parceiros</NavLink></NavListItem>
            </NavList>
          </Column>
          
          <Column>
            <ColumnTitle>Recursos</ColumnTitle>
            <NavList>
              <NavListItem><NavLink href="#">Planos de Aula</NavLink></NavListItem>
              <NavListItem><NavLink href="#">Dados Estatísticos</NavLink></NavListItem>
              <NavListItem><NavLink href="#">Guia da BNCC</NavLink></NavListItem>
              <NavListItem><NavLink href="#">ODS na Educação</NavLink></NavListItem>
              <NavListItem><NavLink href="#">Formação Docente</NavLink></NavListItem>
            </NavList>
          </Column>
        </GridColumns>
        
        <CopyrightSection>
          <CopyrightText>
            &copy; {currentYear} Estatistic.IA. Todos os direitos reservados.
          </CopyrightText>
          <ODSInfo>
          </ODSInfo>
        </CopyrightSection>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;