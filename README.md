<h1 align="center">Welcome to Beatrix Project 👋</h1>

<table>
  <tr>
    <td valign="top" style="padding: 4px">
      <img style="display: inline" alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
    </td>
    <td valign="top" style="padding: 4px">
      <img style="display: inline" alt="Development" src="https://img.shields.io/badge/status-Em desenvolvimento-brightgreen.svg?cacheSeconds=2592000" />
    </td>
  </tr>
</table>

> Projeto gerado pelo Beatrix tool.

## 🛠️ Abrir e rodar o projeto

Após baixar o projeto, você pode abrir com o Visual Studio Code. Para isso:

- Clique em "File" e depois em "Open Folder".
- Procure o local onde o projeto está e o selecione.
- Por fim, clique em "Selecionar Pasta".

O Visual Studio Code abrirá o projeto, caso o "Terminal" não abra automaticamente, vá em "View" e procure por "Terminal".

## ✔️ Tecnologias utilizadas

- `Typescript`
- `React`
- `Styled Components`
- `React Query com Axios`
- `Ant Design`
- `CRACO`
- `CommitLint`
- `Husky`
- `Eslint - Airbnb & Prettier`
- `Storybook`

## Instalando as dependências

Certifique-se de ter o NVM instalado na máquina.
Caso não tenha, é recomendado instalar via chocolatey:

```sh
choco install nvm
```

Com o NVM instalado, basta rodar o seguinte comando:

Windows:

```sh
nvm install $(Get-Content .nvmrc)
```

```sh
nvm use $(Get-Content .nvmrc)
```

Linux:

```sh
nvm install
```

```sh
nvm use
```

Utilizando a versão correta do Node/NPM, instale as dependências:

```sh
yarn
```

## Rodando o projeto

Sem Docker:

```sh
yarn start
```

Com Docker:

```sh
docker-compose up -d --build
```

```sh
docker-compose -f docker-compose-prod.yml up -d --build
```

## Author

👤 **Viceri**

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
