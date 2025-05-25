/**
 * @typedef {object} AppTheme
 * @property {string} background - Cor de fundo principal 
 * @property {string} foreground - Cor do texto principal.
 * @property {string} card - Cor de fundo de elementos tipo cartão/blocos.
 * @property {string} cardForeground - Cor do texto em elementos tipo cartão.
 * @property {string} popover - Cor de fundo de popovers/menus flutuantes.
 * @property {string} popoverForeground - Cor do texto em popovers.
 * @property {string} primary - Cor primária para elementos interativos
 * @property {string} primaryForeground - Cor do texto sobre a cor primária.
 * @property {string} secondary - Cor secundária/de destaque 
 * @property {string} secondaryForeground - Cor do texto sobre a cor secundária.
 * @property {string} muted - Cor de fundo para elementos "silenciados"/neutros.
 * @property {string} mutedForeground 
 * @property {string} accent 
 * @property {string} accentForeground 
 * @property {string} destructive 
 * @property {string} destructiveForeground 
 * @property {string} border - Cor de bordas e divisores.
 * @property {string} input - Cor de borda/fundo de campos de input.
 * @property {string} ring - Cor de foco para elementos interativos.
 * @property {string} radius - Raio de borda padrão para elementos arredondados.
 */

/** @type {AppTheme} */
export const darkTheme = {
  background: '#0F171B', 
  foreground: '#F0FFFF', 

  card: '#1F2937',      
  cardForeground: '#F0FFFF',

  popover: '#1F2937',
  popoverForeground: '#F0FFFF',

  primary: '#00FFFF',      
  primaryForeground: '#ffffff',

  secondary: '#07161F',   
  secondaryForeground: '#E6FFFF',

  muted: '#2C3A4F',        
  mutedForeground: '#BCC2C6', 

  accent: '#0C9F9F',      
  accentForeground: '#F7FBFF',

  destructive: '#DC2626', 
  destructiveForeground: '#F7FBFF',

  border: '#4C5D6F',      
  input: '#4C5D6F',
  ring: '#00FFFF',        

  radius: '0.5rem', 
};

/** @type {AppTheme} */
export const lightTheme = {
  background: '#FFFFFF',
  foreground: '#0F171B',

  card: '#FFFFFF',
  cardForeground: '#0F171B',

  popover: '#FFFFFF',
  popoverForeground: '#0F171B',

  primary: '#00FFFF',
  primaryForeground: '#1F2937',

  secondary: '#E6E9EE', 
  secondaryForeground: '#1A2E3C', 

  muted: '#E6E9EE',
  mutedForeground: '#75889E', 

  accent: '#0C9F9F',
  accentForeground: '#1F2937',

  destructive: '#DC2626',
  destructiveForeground: '#F7FBFF',

  border: '#D0D6DB', 
  input: '#D0D6DB',
  ring: '#00FFFF',

  radius: '0.5rem',
};