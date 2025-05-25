import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { Telescope } from 'lucide-react';
import { Button } from './ui/button'; 

/**
 * @typedef {object} HeaderStyledProps
 * @property {import('../styles/themes').AppTheme} tema
 */


/** @type {import('styled-components').ThemedStyledFunction<"header", HeaderStyledProps>} */
const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.card}; 
  color: ${(props) => props.theme.foreground}; 
  padding: 1rem 0; 
  border-bottom: 1px solid ${(props) => props.theme.border}; 
  box-shadow: 0 2px 15px rgba(35, 86, 90, 0.212); 
  position: sticky; /* sticky top-0 */
  top: 0;
  z-index: 50; 
  width: 100%; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", HeaderStyledProps>} */
const HeaderContent = styled.div`
  max-width: 1280px; 
  margin: 0 auto; 
  padding: 0 1rem; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
`;

/** @type {import('styled-components').ThemedStyledFunction<typeof Link, HeaderStyledProps>} */
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem; 
  font-size: 1.5rem; 
  font-weight: 700; 
  color: ${(props) => props.theme.primary}; 
  text-decoration: none; 
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.4); 
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.primaryForeground}; 
  }

  svg {
    width: 2rem; 
    height: 2rem; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"nav", HeaderStyledProps>} */
const Navbar = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  margin-right: 1.5rem;
`;

/** @type {import('styled-components').ThemedStyledFunction<"ul", HeaderStyledProps>} */
const NavList = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;


/** @type {import('styled-components').ThemedStyledFunction<"a", HeaderStyledProps>} */
const AnchorNavLink = styled.a`
  color: ${(props) => props.theme.foreground}; 
  text-decoration: none;
  font-weight: 500; 
  font-size: 1rem; 
  transition: color 0.2s ease-in-out;
  cursor: pointer; 

  &:hover {
    color: ${(props) => props.theme.primary}; 
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", HeaderStyledProps>} */
const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

/**
 * @returns {React.ReactElement}
 */
const Header = () => {
  const handleScroll = (e, id) => {
    e.preventDefault(); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoLink to="/">
          <Telescope />
          Estatistic.IA
        </LogoLink>

        <Navbar>
          <NavList>
            <li>
              <AnchorNavLink href="#benefits" onClick={(e) => handleScroll(e, 'benefits')}>Benefícios</AnchorNavLink>
            </li>
            <li>
              <AnchorNavLink href="#features" onClick={(e) => handleScroll(e, 'features')}>Recursos</AnchorNavLink>
            </li>
          </NavList>
        </Navbar>

        <ActionsWrapper>
          <Link to="/gerar-plano-aula" style={{ textDecoration: 'none' }}>
            <Button
              variant="default"
              size="lg"
              style={{ borderRadius: '9999px' }}
            >
              Começar
            </Button>
          </Link>
        </ActionsWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;