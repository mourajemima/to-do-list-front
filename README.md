# 🏥 To-Do List - Front-End

Aplicação frontend desenvolvida em React + Vite para consumo da API do To-Do List.
O projeto permite criar, listar e deletar tarefas, funcionando de forma integrada com o backend hospedado no Render.

Este repositório possui pipeline de CI/CD com GitHub Actions, realizando automaticamente:
- Instalação das dependências
- Execução de testes
- Build de produção
- Deploy automático na Vercel

---

## 🚀 Tecnologias Utilizadas

- React
- Vite
- Axios
- Jest / Testing Library
- GitHub Actions 

---

## 🌐 Deploy

🔗 Aplicação online: [To-do List](https://todo-list-front-hazel.vercel.app/)

## ⚙️ Executando o projeto localmente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/mourajemima/to-do-list-front.git
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Rodar projeto
```bash
npm run dev
```
Aplicação abrirá em: 
```
http://localhost:5173
```

---

## 🧪 Rodando os testes

Para rodar os testes localmente execute o comando: 
```bash
npm test
```

---

## ⚙️ CI/CD com GitHub Actions + Vercel

Este projeto possui um workflow em: 
```bash
.github/workflows/ci.yml
```
Ele executa automaticamente a cada git push:
- Instação das dependências
- Execução dos testes
- Geração do build de produção
- Deploy para o Vercel usando o Vercel CLI

Necessário a configuração dos secrets:
```
VERCEL_TOKEN
VERCEL_PROJECT_ID
VERCEL_ORG_ID
```

---

## 👩‍💻 Autores

| Nome | Função                             | 
|------|------------------------------------|
| **Jemima Moura** | Estudante de Sistemas para Internet |

> Este projeto integra as atividades práticas da disciplina de Desenvolvimento Web para a Nuvem, envolvendo CI/CD, testes automatizados e deploy utilizando um PaaS.




