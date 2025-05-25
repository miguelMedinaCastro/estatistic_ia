import styled from 'styled-components';

/*
 * @typedef {Object} ThemeProps
 * @property {import('styled-components').DefaultTheme} tema
 */

export const GlowText = styled.span`
  text-shadow: 0 0 10px rgb(0, 255, 255), 
               0 0 20px rgba(0, 255, 255, 0.5); 

`;

export const GlowBorder = styled.div`
  box-shadow: 0 0 10px rgb(0, 255, 255), 
              0 0 20px rgba(0, 255, 255, 0.3); 
  border-radius: ${(props) => props.theme.radius};
  padding: 20px;
`;