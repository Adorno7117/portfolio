# Portfólio Profissional

Landing page estática para apresentar perfil, tecnologias, projetos, freelances, experiência e contato.

## Estrutura

```text
.
├── index.html
├── assets
│   ├── css
│   │   └── styles.css
│   ├── img
│   │   └── profile-placeholder.svg
│   └── js
│       ├── data.js
│       └── main.js
└── README.md
```

## Como editar

- Troque seus textos, tecnologias, projetos, freelances e links em `assets/js/data.js`.
- Para cada projeto, edite `slug`, `longDescription`, `images` e `links`. O card da home abre `project.html?slug=seu-slug`.
- Para cada freelance, preencha `url` para transformar o card em um link clicável para o trabalho publicado.
- Substitua `assets/img/profile-placeholder.svg` por uma foto real e atualize o campo `photo` em `assets/js/data.js`, se usar outro nome de arquivo.
- Ajuste cores, espaçamentos e layout em `assets/css/styles.css`.

## Como abrir

Abra o arquivo `index.html` no navegador. Como o projeto é estático, não precisa instalar dependências.
