import styled from 'styled-components';

export const HeroSection = styled.section`
  background: linear-gradient(to bottom, rgba(6, 17, 25, 0.9), rgb(6, 17, 25)),
              radial-gradient(ellipse at top, rgba(0, 255, 255, 0.15), transparent 70%);
  min-height: 400px; 
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.foreground}; 
`;

export const Card = styled.div`
  background: linear-gradient(145deg, rgba(6, 17, 25, 0.8), rgba(0, 128, 128, 0.1));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: ${props => props.theme.radius};
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.cardForeground};
`;

export const ButtonWithGlow = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.primaryForeground};
  padding: 10px 20px;
  border: none;
  border-radius: ${props => props.theme.radius};
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
  font-weight: bold;

  &:hover {
    box-shadow: 0 0 10px rgb(0, 255, 255), 0 0 20px rgba(0, 255, 255, 0.5);
    transform: translateY(-2px);
    background-color: ${props => props.theme.accent}; 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.ring}; 
  }
`;

export const UnderlineGlowLink = styled.a`
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.primary}; 
  display: inline-block;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: rgb(0, 255, 255); 
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const GlowText = styled.span`
  text-shadow: 0 0 10px rgb(0, 255, 255), 0 0 20px rgba(0, 255, 255, 0.5);
`;

export const GlowBorder = styled.div`
  box-shadow: 0 0 10px rgb(0, 255, 255), 0 0 20px rgba(0, 255, 255, 0.3);
  border-radius: ${props => props.theme.radius}; 
`;