
# 📚 Catálogo de Biblioteca - Node.js + Laragon

Este é um simples catálogo de livros desenvolvido em **Node.js**, utilizando **MySQL** como banco de dados e executado localmente com o **Laragon**.

## 🚀 Funcionalidades

- Listagem de livros disponíveis no catálogo
- Integração com banco de dados MySQL
- Servidor local com Node.js e Express

## ⚙️ Pré-requisitos

Antes de começar, verifique se os seguintes itens estão instalados em sua máquina:

- [Node.js](https://nodejs.org/)
- [Laragon](https://laragon.org/) (com MySQL ativo)
- [Visual Studio Code](https://code.visualstudio.com/) (ou outro editor de código)

## 📥 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

### 2. Configure o banco de dados

- Inicie o **Laragon** e acesse o **phpMyAdmin**
- Crie um novo banco de dados chamado `livraria`
- Importe o arquivo `livraria.sql` (incluso no projeto)

### 3. Instale as dependências do Node.js

```bash
npm install
```

### 4. Inicie o servidor

```bash
node app.js
```

Após a execução, você verá a mensagem:

```
Servidor rodando...
```

Acesse o projeto no navegador em:

```
http://localhost:3000/produtos
```

## 🗃️ Estrutura do Projeto

```
📁 seu-projeto/
├── 📁 node_modules/
├── 📄 app.js
├── 📄 livraria.sql
├── 📄 package.json
└── 📄 README.md
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias ou correções.

## 📝 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

Se quiser, posso adaptar esse README para inglês ou deixá-lo com uma linguagem ainda mais técnica. Deseja isso?
