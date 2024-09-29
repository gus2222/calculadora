# Calculadora em React

Calculadora simples desenvolvida em React, que permite realizar operações básicas como adição,subtração, multiplicação e divisão.
A interface é intuitiva e responsiva, ideal para prática e aprendizado de desenvolvimento front-end com React.

## Funcionalidades

- **Operações Básicas**: Realiza adição, subtração, multiplicação e divisão.
- **Limpar Entrada**: O botão "C" permite limpar todos os valores.
- **Entrada de Números**: Permite a entrada de números de 0 a 9.
- **Entrada de Ponto**: O botão "." permite a entrada de números decimais.
- **Resultado**: O botão "=" calcula e exibe o resultado da expressão.

## Como Utilizar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na sua máquina.
- [Docker](https://www.docker.com/) instalado na sua máquina (se optar por usar Docker).

### Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### Executando o Projeto Localmente

1. **Instalar Dependências**:

   No diretório do projeto, execute:

   ```bash
   npm install
   ```

2. **Iniciar o Servidor de Desenvolvimento**:

   Execute o seguinte comando para iniciar a aplicação:

   ```bash
   npm start
   ```

   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### Executando o Projeto com Docker

1. **Construir a Imagem Docker**:

   No diretório do projeto, execute o seguinte comando:

   ```bash
   docker build -t nome-da-imagem .
   ```

2. **Executar o Contêiner**:

   Após a construção da imagem, execute o contêiner usando o comando:

   ```bash
   docker run -p 3000:3000 nome-da-imagem
   ```

   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

```
nome-do-repositorio/
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── public/
│   ├── index.html
│   └── favicon.ico
├── package.json
└── README.md
```

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests. Qualquer contribuição é bem-vinda!

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

### Ajustes Personalizados

Certifique-se de substituir `seu-usuario/nome-do-repositorio` pelo seu usuário e o nome real do repositório no GitHub. Também, ajuste o nome da imagem Docker conforme desejado. 
