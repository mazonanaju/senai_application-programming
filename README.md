# 📘Desenvolvimento em React - Senai

## Notas Gerais:
- Para cancelar uma operação no terminal tecla-se `Ctrl+C`.

## 🚀 Fluxo 
#### Toda vez que clonar um projeto existente, execute `npm i` antes de `npm run dev`! 

### 1. Criar um novo projeto React
```bash
npm create vite@latest
```
- Execute este comando **no terminal/CMD**
- Siga as instruções para nomear seu projeto
- Escolha "React" como framework
- Escolha "JavaScript" como variante

### 2. Instalar dependências
```bash
npm i
```
- Instala todas as bibliotecas necessárias (cria a pasta `node_modules`)
- **NUNCA mexa manualmente** na pasta `node_modules`
- Execute sempre após clonar um projeto ou criar um novo

### 3. Executar a aplicação
```bash
npm run dev
```
- Inicia o servidor de desenvolvimento
- A aplicação ficará disponível (geralmente em `http://localhost:5173`)
- Alterações no código atualizam automaticamente no navegador

## 📁 Estrutura de Diretórios

```
meu-projeto/
├── node_modules/        # ✅ NUNca altere manualmente
├── public/              # Arquivos públicos (imagens, etc.)
├── src/                 # ✅ Seu código principal aqui
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Ponto de entrada
├── .gitignore           # ✅ Ignora node_modules
├── index.html           # HTML base
├── package.json         # Configurações e dependências
└── vite.config.js       # Configuração do Vite
```

## 📝 Convenções de Caminhos

| Caminho | Significado | Exemplo |
|---------|-------------|---------|
| `./` | Diretório atual | `./App.jsx` (arquivo na mesma pasta) |
| `../` | Diretório pai (um nível acima) | `../components/Button.jsx` |
| `/` | Diretório raiz (caminho absoluto) | `/src/App.jsx` |

## 💡 Dicas Importantes

### ✅ O que FAZER:
```bash
# Sempre após baixar um projeto:
npm i

# Para executar:
npm run dev

# Para instalar uma nova biblioteca:
npm install nome-da-biblioteca
```

### ❌ O que NÃO FAZER:
```bash
# NUNCA altere manualmente a pasta node_modules
# NUNCA delete package.json
# NUNCA commit node_modules no Git
```

## 🔧 Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm install` | Instala dependências |
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria versão para produção |
| `npm run preview` | Testa versão de produção localmente |


📝 Convenções de Caminhos

| Caminho | Significado | Exemplo |
|---------|-------------|---------|
| `./` | Diretório atual | `./App.jsx` (arquivo na mesma pasta) |
| `../` | Diretório pai (um nível acima) | `../components/Button.jsx` |
| `/` | Diretório raiz (caminho absoluto) | `/src/App.jsx` |

## 🎯 Exemplo de Importação

```jsx
// Importando de diretório atual (mesma pasta)
import MeuComponente from './MeuComponente'

// Importando de pasta pai (um nível acima)
import Botao from '../components/Botao'

// Importando de biblioteca (node_modules)
import React from 'react'
import useState from 'react'
```

## 📋 Checklist ao Iniciar

1. [ ] `npm create vite@latest` (criar projeto)
2. [ ] `cd nome-do-projeto` (entrar na pasta)
3. [ ] `npm i` (instalar dependências)
4. [ ] `npm run dev` (executar projeto)
5. [ ] Abrir navegador em `http://localhost:XXXX`

#### Por padrão do vite, a página já vem com uma estilização, é só comentar e criar a própria!
