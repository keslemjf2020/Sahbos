---
title: "Chatbot com IA para Atendimento ao Cliente"
date: "2026-05-16"
tags: ["Automacao","IA"]
description: "Post gerado pelo time de agentes DeepSeek"
---

# Chatbot com IA para Atendimento ao Cliente

## Introdução

Cliente espera resposta em segundos, não horas. Um chatbot com IA resolve 80% das perguntas sem intervenção humana. Com Make, DeepSeek e WhatsApp, você monta um atendente virtual em uma tarde. Sem programar. Sem contratar equipe.

## O Problema Real

Pequenos negócios perdem vendas porque demoram para responder. "Quanto custa?" "Tem em estoque?" "Qual o prazo?" são perguntas que repetem todo dia. Um chatbot com IA responde na hora, 24 horas por dia, 7 dias por semana.

## O que Você Vai Precisar

- **WhatsApp Business API** (via provedor como WATI, Twilio ou direct)
- **Make** — orquestrador do fluxo ([link afiliado](https://www.make.com/en/register?pc=seulink))
- **DeepSeek API** — IA para entender e responder
- **Google Sheets** — base de conhecimento (opcional)

## Passo a Passo

### 1. Configure o Webhook de Entrada

No Make, crie um cenário com trigger "Webhook". Copie a URL gerada. Cole no provedor WhatsApp como endpoint. Toda mensagem que chegar no WhatsApp será enviada para o Make.

```
WhatsApp -> Webhook Make -> DeepSeek -> Resposta
```

### 2. Crie a Base de Conhecimento

Monte uma planilha no Google Sheets com perguntas frequentes e respostas:

| Palavra-chave | Resposta |
|---------------|----------|
| preco, valor, custo | Nossos produtos custam a partir de R$49,90 |
| horario, funcionamento | Funcionamos seg-sex 8h-18h, sab 8h-12h |
| prazo, entrega, frete | Entrega em 5-10 dias uteis. Frete gratis acima de R$200 |

### 3. Configure o Prompt no DeepSeek

O prompt define como o chatbot se comporta:

```
Você é um atendente da empresa [NOME]. Responda de forma educada e direta em no maximo 2 frases.

Regras:
- Consulte a planilha de FAQ antes de responder
- Se não souber a resposta, diga "Vou transferir para um atendente"
- Nao invente precos ou prazos
- Use emojis com moderacao

Contexto atual: [INSERIR PERGUNTA DO CLIENTE]
```

### 4. Monte o Fluxo no Make

1. **Trigger:** Webhook recebe mensagem do cliente
2. **Modulo Google Sheets:** Busca resposta na FAQ (match de palavra-chave)
3. **Modulo HTTP:** Envia pergunta para DeepSeek com prompt
4. **Filtro:** Se DeepSeek retornar "transferir", encaminha para humano
5. **Modulo WhatsApp:** Envia resposta de volta

### 5. Configure o Fallback Humano

Crie um módulo que, quando a IA não souber responder:
- Envia mensagem: "Deixa eu te transferir para um atendente"
- Cria tarefa no Trello ou Asana
- Envia notificação no seu celular

## Exemplo Prático

**Negócio:** Pet shop online

**Fluxo real:**

1. Cliente: "Oi, tem ração para gato castrado?"
2. Webhook recebe no Make
3. Google Sheets busca "ração gato castrado" -> não encontra
4. DeepSeek recebe pergunta + prompt
5. DeepSeek responde: "Temos sim! A ração Premium Gatos Castrados está por R$89,90. Quer ver o link?"
6. Make envia resposta via WhatsApp
7. Cliente: "Quero!" -> IA envia link do produto

**Resultado:** 15 segundos. Cliente feliz. Venda feita.

## Cuidados Importantes

- **Limite de escopo:** IA não resolve tudo. Defina o que ela pode fazer
- **Transferência humana:** Sempre ofereça após 3 tentativas sem sucesso
- **Monitoramento:** Reveja conversas uma vez por semana
- **Custo:** DeepSeek custa centavos por mil mensagens
- **Teste:** Simule 10 perguntas reais antes de ativar

## Checklist Final

- [ ] Conta WhatsApp Business API ativa
- [ ] Webhook Make configurado e testado
- [ ] Base de conhecimento no Google Sheets
- [ ] Prompt DeepSeek ajustado para seu negócio
- [ ] Fluxo de fallback humano funcionando
- [ ] Teste com 10 perguntas reais
- [ ] Monitoramento agendado semanalmente
- [ ] Conta Make ativa ([link](https://www.make.com/en/register?pc=seulink))

Chatbot com IA não substitui atendimento humano — elimina o repetitivo. Monte o seu hoje e recupere horas do seu dia.