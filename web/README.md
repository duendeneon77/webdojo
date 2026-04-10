<!-- README.md -->

# 📘 Documentação do Projeto de Testes Automatizados — WebDojo em Cypress

## 📖 Visão geral
Este projeto contém a suíte de **testes automatizados end-to-end (E2E)** da aplicação **WebDojo**, utilizando **Cypress**.

A aplicação principal **WebDojo está no mesmo repositório**, portanto é necessário iniciar o frontend antes da execução dos testes.

---

## 🧱 Estrutura do projeto
Com base na estrutura atual do diretório Cypress:

```text
web/
└── cypress/
    ├── e2e/
    │   └── *.cy.js
    ├── fixtures/
    │   ├── cep.json
    │   ├── consultancy.json
    │   └── document.pdf
    ├── screenshots/
    └── support/
        ├── actions/
        │   └── consultancy.actions.js
        ├── commands.js
        ├── e2e.js
        └── utils.js
```

### 📂 Descrição das pastas
- **e2e/** → Contém os arquivos de testes automatizados.
- **fixtures/** → Massa de dados estática utilizada nos testes.
- **screenshots/** → Capturas automáticas geradas em falhas.
- **support/** → Arquivos de suporte, comandos customizados e utilitários.
- **support/actions/** → Centraliza ações reutilizáveis para cenários específicos.

---

## ⚙️ Pré-requisitos
Antes de executar os testes, certifique-se de ter instalado:

- **Node.js**
- **npm**
- Dependências do projeto instaladas:

```bash
npm install
```

---

## ▶️ Como executar a aplicação
Como a aplicação **WebDojo está no mesmo repositório**, primeiro inicie o projeto frontend:

```bash
npm run dev
```

Script utilizado:

```json
"dev": "serve -s dist -p 3000"
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

> ⚠️ **Importante:** a aplicação deve estar rodando antes de iniciar qualquer teste Cypress.

---

## 🧪 Scripts de execução dos testes

### 🔹 Executar toda a suíte
```bash
npm run test
```

```json
"test": "npx cypress run --config viewportWidth=1440,viewportHeight=900"
```

Executa todos os testes E2E com viewport desktop.

---

### 🔹 Executar apenas testes de login (desktop)
```bash
npm run test:login
```

```json
"test:login": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440,viewportHeight=900"
```

Executa exclusivamente o arquivo de teste de login em resolução desktop.

---

### 🔹 Executar testes de login (mobile)
```bash
npm run test:login:mobile
```

```json
"test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896"
```

Executa o teste de login simulando dispositivo mobile.

---

## 📱 Viewports utilizadas

| Cenário | Largura | Altura |
|---|---:|---:|
| Desktop | 1440 | 900 |
| Mobile | 414 | 896 |

---

## 🧩 Boas práticas adotadas
- Separação entre **massa de dados**, **ações** e **cenários**.
- Uso de **fixtures** para dados reutilizáveis.
- **Commands customizados** para reduzir duplicação.
- Estrutura modular para facilitar manutenção.
- Suporte a execução em **desktop e mobile**.

---

## 🚀 Fluxo recomendado de execução
1. Iniciar a aplicação:
   ```bash
   npm run dev
   ```
2. Em outro terminal, executar os testes:
   ```bash
   npm run test
   ```

Para cenários específicos:

```bash
npm run test:login
```

ou

```bash
npm run test:login:mobile
```

---

## 🛠️ Tecnologias utilizadas
- **Cypress** → Testes E2E
- **JavaScript** → Escrita dos testes
- **Node.js / npm** → Gerenciamento e execução

---

## 📌 Observações
- Os testes dependem da aplicação rodando localmente.
- A pasta `screenshots` é preenchida automaticamente em falhas.
- Fixtures podem ser expandidas para novos cenários.
- O padrão atual facilita integração futura com CI/CD.

---

## 👨‍💻 Autor
Documentação criada para o projeto **WebDojo em Cypress**, com foco em organização, manutenção e escalabilidade dos testes automatizados.

