# Colab Challenge

[API used in this challenge](https://randomuser.me/)

To run the application on your machine, follow the steps below:

1 - Clone this repository on your machine: `git clone https://github.com/guilhermemd/colab`

2 - Install Node dependencies: `npm i`

3 - To start the application: `npm run dev`

4 - Access: http://localhost:3000/

 ## Meu processo para desenvolver o APP
 
 Busquei utilizar o que há de mais novo para Front-End. Por esta razão utilizei o [Nextjs 13 Beta](https://beta.nextjs.org/docs), [Tailwind](https://v2.tailwindcss.com/) e [Typescript](https://www.typescriptlang.org/). Também procurei utilizar alguns conceitos de SOLID, como Talons (Custom Hooks).

- Next.js: Com as melhorias de desempenho e novos recursos para o front-end, escolhi o Next.js 13 Beta. Minha maior dificuldade foi lidar com o novo diretório implementado "app" e saber quando deveria utilizar o "server-side" ou "client-side" em um componente. A nova feature de utilizar um componente async .tsx foi algo que levei um tempo para entender o fluxo de como fazer as requests à API.

- Tailwind: Com o conselho da comunidade React de utilizarmos libs de estilo que sejam performáticas no "server-side", escolhi utilizar o Tailwind. Meus maiores desafios foram perceber que os elementos HTML são chamados com um reset de estilo padrão, descobrir quais bibliotecas de componentes React UI poderia usar com Tailwind e entender como aplicar o mobile first sem ser com CSS padrão.

- Typescript: Trabalhei muito com ReactJS utilizando CSS e JavaScript. Nos últimos meses, venho estudando Typescript e aplicando-o em meus projetos pessoais. Foi um grande desafio, porém, consigo perceber todos os benefícios e utilidades que o Typescript proporciona.
