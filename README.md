# 🌿 Green House - Projeto Web com React

Bem-vindo ao **Green House**, um projeto focado na sustentabilidade, que utiliza tecnologias modernas para exibir dados sobre energia renovável, clima e muito mais. 🚀

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas no SPA.
- **CSS**: Para estilização personalizada de cada componente.
- **LocalStorage**: Para armazenamento local de dados do usuário (login e cadastro).
- **OpenWeather API**: Para obter dados climáticos em tempo real.
- **Vite**: Ferramenta para desenvolvimento e construção de projetos React.

---

## 📦 Dependências e Bibliotecas

O projeto utiliza as seguintes dependências:

- `react` e `react-dom`: Core do React.
- `react-router-dom`: Gerenciamento de rotas.
- `vite`: Configuração e execução do ambiente de desenvolvimento.

---

## 🚀 Instalação e Execução

Siga os passos abaixo para instalar e executar o projeto localmente:

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** ou **yarn** instalados na sua máquina.

### Passo 1: Clone o Repositório

```bash
git clone https://github.com/tultaa/GS_WEB.git
cd GS_WEB
```

### Passo 2: Instale as Dependências

```bash
npm install
# ou
yarn install
```

### Passo 3: Execute o Projeto

```bash
npm run dev
# ou
yarn dev
```

### 📂 Estrutura de Pastas
A estrutura principal do projeto é a seguinte:


```csharp
📦 green-house
├── 📂 public       # Arquivos públicos
├── 📂 src
│   ├── 📂 components  # Componentes reutilizáveis
│   ├── 📂 pages       # Páginas do projeto
│   ├── 📂 styles      # Arquivos CSS globais
│   ├── App.jsx        # Componente principal
│   ├── main.jsx       # Entrada do projeto
├── 📜 package.json    # Configuração de dependências
```


### 🌟 Funcionalidades
- Autenticação:
- Cadastro e login com armazenamento local (LocalStorage).
- Tela "Minha Conta" com logout funcional.
- Clima em Tempo Real:
- Integração com a OpenWeather API para exibir dados climáticos.
- Dados de Energia Renovável:
- Visualização de informações detalhadas sobre energia limpa.
- Interface Responsiva:
- Design responsivo e estilização com Tailwind CSS.
