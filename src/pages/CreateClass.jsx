import React, { useState } from 'react';
import styled from 'styled-components'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Textarea } from "../components/ui/textarea"; 
import { Button } from "../components/ui/button";   
import { Send } from "lucide-react";
// import openai from '../../backend/api';

/**
 * @typedef {object} PageStyledProps
 * @property {import('../styles/themes').AppTheme} tema
 */

/** @type {import('styled-components').ThemedStyledFunction<"div", PageStyledProps>} */
const PageContainer = styled.div`
  min-height: 100vh; 
  display: flex; 
  flex-direction: column; 
  background-color: ${(props) => props.theme.card}; 
  color: ${(props) => props.theme.foreground}; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"main", PageStyledProps>} */
const MainContent = styled.main`
  flex-grow: 1; 
  container: inherit; 
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem; 
  padding-right: 1rem; 
  padding-top: 5rem; 
  padding-bottom: 5rem; 
  max-width: 1280px; 
  width: 100%;
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", PageStyledProps>} */
const ContentWrapper = styled.div`
  max-width: 56rem; 
  margin-left: auto; 
  margin-right: auto; 
  margin-top: 2rem; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"h1", PageStyledProps>} */
const PageTitle = styled.h1`
  font-size: 1.875rem; 
  line-height: 2.25rem;
  font-weight: 700; 
  margin-bottom: 1.5rem; 

  @media (min-width: 768px) { 
    font-size: 2.25rem; 
    line-height: 2.5rem;
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"span", PageStyledProps>} */
const HighlightedText = styled.span`
  color: ${(props) => props.theme.primary}; 
  text-shadow: 0 0 10px rgb(0, 255, 255),
    0 0 20px rgba(0, 255, 255, 0.5); 
`;

/** @type {import('styled-components').ThemedStyledFunction<"p", PageStyledProps>} */
const PageDescription = styled.p`
  color: ${(props) => props.theme.mutedForeground}; 
  margin-bottom: 2rem; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"form", PageStyledProps>} */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", PageStyledProps>} */
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"label", PageStyledProps>} */
const Label = styled.label`
  font-size: 0.875rem; 
  font-weight: 500; 
  color: ${(props) => props.theme.mutedForeground}; 
`;

/** @type {import('styled-components').ThemedStyledFunction<typeof Textarea, PageStyledProps>} */
const CustomTextarea = styled(Textarea)`
  min-height: 9.375rem; 
  background-color: ${(props) => props.theme.card}80; 
  border: 1px solid ${(props) => props.theme.border}; 
  color: ${(props) => props.theme.foreground}; 
  border-radius: ${(props) => props.theme.radius}; 
  padding: 0.5rem 1rem; 
  
  &:focus {
    border-color: ${(props) => props.theme.primary}; 
    outline: none; /* focus:outline-none */
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary}80; 
  }

  transition: all 0.2s ease; 
`;

/** @type {import('styled-components').ThemedStyledFunction<typeof Button, PageStyledProps>} */
const SubmitButton = styled(Button)`
  background-color: ${(props) => props.theme.primary}; 
  color: ${(props) => props.theme.card}; 
  padding: 1.5rem 2rem; 
  height: auto; 
  border-radius: 9999px; 
  font-weight: 500; 
  transition: all 0.3s ease; 
  
  &:hover {
    background-color: ${(props) => props.theme.primary}E6; 
    box-shadow: 0 0 25px ${(props) => props.theme.primary}66; 
  }

  svg {
    margin-left: 0.5rem; 
    width: 1.25rem; 
    height: 1.25rem; 
  }

  &.button-glow {
  }
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", PageStyledProps>} */
const ResultSection = styled.div`
  margin-top: 2.5rem;
`;

/** @type {import('styled-components').ThemedStyledFunction<"h2", PageStyledProps>} */
const ResultTitle = styled.h2`
  font-size: 1.5rem; 
  font-weight: 700; 
  margin-bottom: 1rem; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"span", PageStyledProps>} */
const ResultHighlight = styled.span`
  color: ${(props) => props.theme.primary}; 
`;

/** @type {import('styled-components').ThemedStyledFunction<"div", PageStyledProps>} */
const ResultContent = styled.div`
  background-color: ${(props) => props.theme.card}99; 
  border: 1px solid ${(props) => props.theme.primary}4D; 
  border-radius: ${(props) => props.theme.radius}; 
  padding: 1.5rem; 
  white-space: pre-line; 
`;

const CreateClass = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:3001/api/plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.result || "Sem resposta");
    } catch (error) {
      console.error(error);
      setResult("erro ao se comunicar com a API.");
    } finally {
      setIsLoading(false);
    }
    
  }
  

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <ContentWrapper>
          <PageTitle>
            Gere seus <HighlightedText>Planos de Aula</HighlightedText>
          </PageTitle>
          <PageDescription>
            Descreva o tema e os objetivos da sua aula. A Estatistic.IA irá gerar um plano
            de aula interdisciplinar baseado em dados estatísticos reais e alinhado à BNCC.
          </PageDescription>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="prompt">
                Descreva sua necessidade pedagógica:
              </Label>
              <CustomTextarea
                id="prompt"
                placeholder="Ex: Preciso de uma aula sobre estatística para alunos do 9º ano que trabalhe com dados reais sobre desigualdade de gênero..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={!prompt.trim() || isLoading}
            >
              {isLoading ? (
                "Gerando..."
              ) : (
                <>
                  Gerar Plano de Aula <Send /> 
                </>
              )}
            </SubmitButton>
          </Form>

          {result && (
            <ResultSection>
              <ResultTitle>
                Plano de Aula <ResultHighlight>Gerado</ResultHighlight>
              </ResultTitle>
              <ResultContent>
                {result}
              </ResultContent>
            </ResultSection>
          )}
        </ContentWrapper>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default CreateClass;