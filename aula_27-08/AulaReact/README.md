# 📘 Funções em JavaScript



| Característica | Função Normal | Arrow Function | Função Anônima |
|----------------|---------------|----------------|----------------|
| **Sintaxe** | `function nome() {}` | `const nome = () => {}` ou `() => {}` | `function() {}` ou `() => {}` |
| **Nome** | Tem nome próprio | Pode ter nome se atribuída a variável | Sem nome |
| **Hoisting** | ✅ Pode ser chamada antes da declaração | ❌ Só pode ser usada após declaração | ❌ Só pode ser usada após declaração |
| **`this`** | Tem seu próprio `this` | Herda `this` do escopo pai | Depende do tipo (normal ou arrow) |
| **Uso no React** | Funções complexas | Event handlers, métodos | Callbacks inline |
| **Argumentos** | `arguments` disponível | ❌ Sem objeto `arguments` | Depende do tipo |
| **Construtora** | ✅ Pode usar `new` | ❌ Não pode usar `new` | ❌ Não pode usar `new` |
| **Exemplo Básico** | `function soma(a, b) { return a + b; }` | `const soma = (a, b) => a + b;` | `setTimeout(function() {}, 1000);` |
| **Exemplo React** | `function handleClick() { alert("Clicou!"); }` | `const handleClick = () => alert("Clicou!");` | `<button onClick={() => alert("Clicou!")}>` |

## 💡 Exemplos Práticos em React

### 3. Função Anônima
```jsx
import React from 'react';

function ListaTarefas() {
  const tarefas = ['Estudar React', 'Fazer exercícios', 'Ler documentação'];
  
  return (
    <ul>
      {tarefas.map(function(item) { 
        // Função anônima normal
        return <li key={item}>{item}</li>;
      })}
      
      {/* Ou com arrow function anônima */}
      {tarefas.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default ListaTarefas;
```

## 🔍 Exemplo 

```jsx
import React, { useState } from 'react';

function ExemploCompleto() {
  const [texto, setTexto] = useState('');
  
  // 1. Função normal
  function manipularTexto(str) {
    return str.trim().toLowerCase();
  }
  
  // 2. Arrow function atribuída a variável
  const handleChange = (event) => {
    setTexto(manipularTexto(event.target.value));
  };
  
  // 3. Arrow function para submit
  const handleSubmit = () => {
    alert(`Texto enviado: ${texto}`);
  };
  
  return (
    <div>
      <input 
        type="text" 
        value={texto} 
        onChange={handleChange} // Arrow function
      />
      
      <button onClick={handleSubmit}> // Arrow function
        Enviar
      </button>
      
      <button onClick={() => { // Arrow function anônima inline
        setTexto('');
      }}>
        Limpar
      </button>
    </div>
  );
}

export default ExemploCompleto;
```
# Explicação do Código 

Este código cria um componente React com um campo de entrada e dois botões que permitem ao usuário interagir com texto. Vou explicar parte por parte:

## 🔧 O que o componente faz:

1. Cria um campo de input para digitar texto
2. Automaticamente formata o texto (remove espaços e converte para minúsculas)
3. Permite enviar o texto (mostra um alerta)
4. Permite limpar o campo com um botão

## 📝 Explicação detalhada:

```javascript
const [texto, setTexto] = useState('');
```
- Cria uma variável de estado chamada `texto` que começa vazia
- `setTexto` é a função que usamos para atualizar o valor

```javascript
function manipularTexto(str) {
  return str.trim().toLowerCase();
}
```
- **Função normal** que remove espaços em branco do início/fim e converte para minúsculas

```javascript
const handleChange = (event) => {
  setTexto(manipularTexto(event.target.value));
};
```
- **Arrow function** que é chamada sempre que o usuário digita no input
- Pega o valor digitado, formata com `manipularTexto()` e atualiza o estado

```javascript
const handleSubmit = () => {
  alert(`Texto enviado: ${texto}`);
};
```
- **Arrow function** que mostra um alerta com o texto atual quando clicamos em "Enviar"

```javascript
<button onClick={() => { setTexto(''); }}>
  Limpar
</button>
```
- **Arrow function anônima inline** que limpa o campo quando clicamos em "Limpar"

## 🎯 Resumindo
1. Você digita no campo → o texto é automaticamente formatado
2. Clica em "Enviar" → aparece um alerta com seu texto
3. Clica em "Limpar" → o campo esvazia completamente

## 📚 Resumo

- **Funções normais**: Lógica complexa, cálculos
- **Arrow functions**: Event handlers, métodos de componente  
- **Funções anônimas**: Callbacks simples, funções temporárias
