import React from 'react';
import styled, { css } from 'styled-components';
import { Slot } from '@radix-ui/react-slot';

/**
 * @typedef {object} ButtonProps
 * @property {'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'} [variant='default'] - O estilo visual do botão.
 * @property {'default' | 'sm' | 'lg' | 'icon'} [size='default'] - O tamanho do botão.
 * @property {boolean} [asChild=false] - Renderiza o componente filho como o botão, sem renderizar um <button>.
 * @property {string} [className] - Classes CSS adicionais (usadas para compatibilidade, mas o estilo principal deve ser via styled-components).
 * @property {boolean} [disabled] - Desabilita o botão.
 * @property {React.ReactNode} [children] - O conteúdo do botão.
 */

// 
const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; 
  white-space: nowrap;
  border-radius: ${(props) => props.theme.radius}; 
  font-size: 0.875rem; 
  font-weight: 500; 
  outline: none; 
  transition: all 0.2s ease-in-out; 
  box-shadow: none; 
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -2px; 
    left: -2px; 
    right: -2px; 
    bottom: -2px; 
    border-radius: inherit; 
    box-shadow: 0 0 0 2px ${(props) => props.theme.ring}; 
    background-color: ${(props) => props.theme.background};
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:focus-visible::after {
    opacity: 1; 
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  
  & svg {
    pointer-events: none;
    width: 1rem; 
    height: 1rem; 
    flex-shrink: 0; 
  }
`;

const variantStyles = css`
  ${(props) => {
    switch (props.variant) {
      case 'default':
        return css`
          background-color: ${props.theme.primary}; 
          color: ${props.theme.background}; 
          &:hover {
            background-color: ${props.theme.primary}E6;
          }
        `;
      case 'destructive':
        return css`
          background-color: ${props.theme.destructive};
          color: ${props.theme.destructiveForeground}; 
          &:hover {
            background-color: ${props.theme.destructive}E6; 
          }
        `;
      case 'outline':
        return css`
          border: 1px solid ${props.theme.input}; 
          background-color: ${props.theme.background}; 
          &:hover {
            background-color: ${props.theme.accent}; 
            color: ${props.theme.accentForeground}; 
          }
        `;
      case 'secondary':
        return css`
          background-color: ${props.theme.secondary}; 
          color: ${props.theme.secondaryForeground}; 
          &:hover {
            background-color: ${props.theme.secondary}CC; 
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent; 
          color: inherit; 
          &:hover {
            background-color: ${props.theme.accent}; 
            color: ${props.theme.accentForeground}; 
          }
        `;
      case 'link':
        return css`
          background-color: transparent; 
          color: ${props.theme.primary}; 
          text-decoration: none; 
          &:hover {
            text-decoration: underline; 
            text-underline-offset: 4px;
          }
        `;
      default:
        return ''; 
    }
  }}
`;

// tamanhos
const sizeStyles = css`
  ${(props) => {
    switch (props.size) {
      case 'default':
        return css`
          height: 2.5rem; 
          padding: 0.5rem 1rem; 
        `;
      case 'sm':
        return css`
          height: 2.25rem;
          border-radius: ${(props) => props.theme.radius}; 
          padding: 0 0.75rem; 
        `;
      case 'lg':
        return css`
          height: 2.75rem; 
          border-radius: ${(props) => props.theme.radius}; 
          padding: 0 2rem; 
        `;
      case 'icon':
        return css`
          height: 2.5rem; 
          width: 2.5rem; 
          padding: 0; 
        `;
      default:
        return '';
    }
  }}
`;

//  estilo do botão
/** @type {import('styled-components').ThemedStyledFunction<"button", ButtonProps>} */
const ButtonStyled = styled.button`
  ${baseButtonStyles}
  ${variantStyles}
  ${sizeStyles}

  
  &.custom-class {

  }
`;

/**
 * @param {ButtonProps & React.RefAttributes<HTMLButtonElement>} props
 * @returns {React.ReactElement}
 */
const Button = React.forwardRef(({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : ButtonStyled; 
  return (
    <Comp
      ref={ref}
      variant={variant} 
      size={size}     
      className={className}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };
