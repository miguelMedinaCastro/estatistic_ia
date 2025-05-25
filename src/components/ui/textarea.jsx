import React from 'react';
import styled from 'styled-components';

/**
 * @typedef {object} TextareaProps
 * @property {string} [className] - Classes CSS adicionais - compatibilidade
 * @property {boolean} [disabled] - Desabilita o textarea
 * @property {string} [placeholder] - Texto placeholder do textarea
 */

// estilo texto
/** @type {import('styled-components').ThemedStyledFunction<"textarea", TextareaProps>} */
const TextareaStyled = styled.textarea`
  display: flex; 
  min-height: 5rem; 
  width: 100%; 
  border-radius: ${(props) => props.theme.radius}; 
  border: 1px solid ${(props) => props.theme.input}; 
  background-color: ${(props) => props.theme.background}; 
  padding: 0.5rem 0.75rem; 
  font-size: 0.875rem; 
  
  outline: none; 
  transition: all 0.2s ease-in-out; 
  box-shadow: none; 
  position: relative; 

  &::placeholder {
    color: ${(props) => props.theme.mutedForeground}; 
  }

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
    cursor: not-allowed; 
    opacity: 0.5; 
  }

  &.custom-class {
  
  }
`;

/**
 * @param {TextareaProps & React.RefAttributes<HTMLTextAreaElement>} props
 * @returns {React.ReactElement}
 */
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <TextareaStyled
      ref={ref}
      className={className} 
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export { Textarea };